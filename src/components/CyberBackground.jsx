import { useEffect, useRef } from 'react'

const CyberBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')

    const resize = () => {
      cv.width = window.innerWidth
      cv.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const lerpRGB = (t) => {
      const r = Math.round(56 + t * (52 - 56))
      const g = Math.round(189 + t * (211 - 189))
      const b = Math.round(248 + t * (153 - 248))
      return `${r},${g},${b}`
    }

    const stars = Array.from({ length: 125 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      speed: Math.random() * 0.55 + 0.07,
      trail: Math.random() * 15 + 4,
      op: Math.random() * 0.6 + 0.28,
      r: Math.random() * 0.7 + 0.22
    }))

    const nodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.8 + 1.1,
      pulse: Math.random() * Math.PI * 2,
      cp: Math.random() * Math.PI * 2,
      cs: Math.random() * 0.007 + 0.003
    }))

    const ripples = []
    const packets = []
    let scanY = 0
    let tick = 0
    let animId
    const CONN = 128

    const nebula = () => {
      [[0, 0], [cv.width, 0], [0, cv.height], [cv.width, cv.height]].forEach(([ex, ey]) => {
        const grd = cx.createRadialGradient(ex, ey, 0, ex, ey, cv.width * 0.45)
        grd.addColorStop(0, 'rgba(2,5,25,0.55)')
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        cx.fillStyle = grd
        cx.fillRect(0, 0, cv.width, cv.height)
      })
    }
const drawChevron = () => {
      const cx2 = cv.width * 0.92
      const cy2 = cv.height * 0.12
      const size = 38
      cx.save ()
      cx.globalAlpha = 0.022
      cx.strokeStyle = '#38BDF8'
      cx.lineWidth = 1.2
      cx.beginPath()
      cx.moveTo(cx2, cy2 - size * 0.5)
      cx.lineTo(cx2 + size * 0.38, cy2 + size * 0.5)
      cx.lineTo(cx2, cy2 + size * 0.2)
      cx.lineTo(cx2 - size * 0.38, cy2 + size * 0.5)
      cx.closePath()
      cx.stroke()
      cx.restore()
    }
    const animate = () => {
      tick++
      cx.fillStyle = '#0F172A'
      cx.fillRect(0, 0, cv.width, cv.height)
      nebula()
      drawChevron()

      stars.forEach(s => {
        s.y -= s.speed
        if (s.y < -s.trail) { s.y = cv.height + s.trail; s.x = Math.random() * cv.width }
        cx.beginPath(); cx.moveTo(s.x, s.y); cx.lineTo(s.x, s.y + s.trail)
        cx.strokeStyle = `rgba(185,220,255,${s.op * 0.48})`
        cx.lineWidth = s.r * 0.85; cx.stroke()
        cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        cx.fillStyle = `rgba(225,245,255,${s.op})`; cx.fill()
      })

      if (tick % 115 === 0 && nodes.length > 0) {
        const n = nodes[Math.floor(Math.random() * nodes.length)]
        ripples.push({ x: n.x, y: n.y, rad: 4, max: 85 + Math.random() * 55, rgb: lerpRGB(Math.sin(n.cp) * 0.5 + 0.5) })
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const p = ripples[i]; p.rad += 0.7
        const al = (1 - p.rad / p.max) * 0.26
        if (al <= 0) { ripples.splice(i, 1); continue }
        cx.beginPath(); cx.arc(p.x, p.y, p.rad, 0, Math.PI * 2)
        cx.strokeStyle = `rgba(${p.rgb},${al})`; cx.lineWidth = 0.85; cx.stroke()
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONN) {
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y)
            cx.strokeStyle = `rgba(0,185,215,${(1 - d / CONN) * 0.17})`
            cx.lineWidth = 0.5; cx.stroke()
          }
        }
      }

      if (tick % 82 === 0) {
        const a = nodes[Math.floor(Math.random() * nodes.length)]
        const b = nodes[Math.floor(Math.random() * nodes.length)]
        if (a !== b) {
          const dx = b.x - a.x, dy = b.y - a.y
          if (Math.sqrt(dx * dx + dy * dy) < CONN)
            packets.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0, rgb: lerpRGB(Math.random()) })
        }
      }
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]; p.t += 0.015
        if (p.t >= 1) { packets.splice(i, 1); continue }
        const px = p.ax + (p.bx - p.ax) * p.t
        const py = p.ay + (p.by - p.ay) * p.t
        cx.beginPath(); cx.arc(px, py, 3.8, 0, Math.PI * 2)
        cx.fillStyle = `rgba(${p.rgb},0.1)`; cx.fill()
        cx.beginPath(); cx.arc(px, py, 1.8, 0, Math.PI * 2)
        cx.fillStyle = `rgba(${p.rgb},0.92)`; cx.fill()
      }

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.016; n.cp += n.cs
        if (n.x < 0 || n.x > cv.width) n.vx *= -1
        if (n.y < 0 || n.y > cv.height) n.vy *= -1
        const pr = n.r + Math.sin(n.pulse) * 0.85
        const rgb = lerpRGB(Math.sin(n.cp) * 0.5 + 0.5)
        for (let g = 5; g >= 1; g--) {
          cx.beginPath(); cx.arc(n.x, n.y, pr * g * 2.0, 0, Math.PI * 2)
          cx.fillStyle = `rgba(${rgb},${0.01 / g})`; cx.fill()
        }
        cx.beginPath(); cx.arc(n.x, n.y, pr * 1.9, 0, Math.PI * 2)
        cx.strokeStyle = `rgba(${rgb},0.12)`; cx.lineWidth = 0.5; cx.stroke()
        cx.beginPath(); cx.arc(n.x, n.y, pr, 0, Math.PI * 2)
        cx.fillStyle = `rgba(${rgb},0.95)`; cx.fill()
      })

      scanY = (scanY + 0.28) % cv.height
      for (let i = 0; i < 72; i++) {
        cx.fillStyle = `rgba(52,211,153,${Math.sin((i / 72) * Math.PI) * 0.008})`
        cx.fillRect(0, scanY - 36 + i, cv.width, 1)
      }
      cx.fillStyle = 'rgba(52,211,153,0.02)'
      cx.fillRect(0, scanY, cv.width, 1)

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default CyberBackground