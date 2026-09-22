import { motion } from 'framer-motion'

const steps = [
  {
    label: 'Before',
    score: '40%',
    status: 'AT RISK',
    color: '#EF4444',
    desc: 'Baseline AWS account before any controls deployed'
  },
  {
    label: 'After Terraform Baseline',
    score: '78%',
    status: 'NEEDS IMPROVEMENT',
    color: '#F59E0B',
    desc: 'S3 encryption, public access blocks, CloudTrail, required tags enforced'
  },
  {
    label: 'After 10 Projects',
    score: '83%',
    status: 'GOOD',
    color: '#34D399',
    desc: 'Full pipeline with CI/CD gate, Cosign signing, OSCAL documentation, and Okta identity controls'
  }
]

function ComplianceJourney() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '2rem', paddingBottom: '3rem' }}
    >
      <h3 className="section-title" style={{ marginBottom: '0.5rem' }}>
        Compliance Posture Journey
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
        One live AWS account. Ten projects. Measurable improvement at every stage.
      </p>

      <div style={{ position: 'relative', padding: '0 1rem' }}>
        <div style={{
          position: 'absolute',
          top: '2.2rem',
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(to right, #EF4444, #F59E0B, #34D399)',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0.5rem' }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: `3px solid ${step.color}`,
                boxShadow: `0 0 16px ${step.color}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: step.color, fontFamily: 'Courier New, monospace' }}>
                  {i + 1}
                </span>
              </div>

              <div style={{
                background: 'var(--bg-card)',
                border: `1px solid ${step.color}44`,
                borderTop: `2px solid ${step.color}`,
                borderRadius: '8px',
                padding: '1.25rem',
                textAlign: 'center',
                width: '100%'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: step.color, fontFamily: 'Courier New, monospace', lineHeight: 1 }}>
                  {step.score}
                </div>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: step.color,
                  border: `1px solid ${step.color}`,
                  borderRadius: '4px',
                  padding: '0.15rem 0.4rem',
                  margin: '0.4rem 0',
                  fontFamily: 'Courier New, monospace',
                  letterSpacing: '0.06em'
                }}>
                  {step.status}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-primary)', margin: '0.4rem 0' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ComplianceJourney