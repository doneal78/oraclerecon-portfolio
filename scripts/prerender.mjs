import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import {
  certifications,
  experience,
  pages,
  profile,
  projects,
  proof,
  skillGroups,
} from '../src/data/site.js'

const root = process.cwd()
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')
const { render } = await import(pathToFileURL(serverEntry).href)

const routes = [
  { url: '/', file: 'index.html', meta: pages.home },
  { url: '/labs', file: 'labs.html', meta: pages.labs },
  { url: '/resume', file: 'resume.html', meta: pages.resume },
  { url: '/404', file: '404.html', meta: pages.notFound },
]

function fill(html, meta) {
  const canonical = meta.path === '/404'
    ? `${profile.site}/404`
    : new URL(meta.path, profile.site).href
  return html
    .split('__TITLE__').join(escapeAttr(meta.title))
    .split('__DESCRIPTION__').join(escapeAttr(meta.description))
    .split('__CANONICAL__').join(escapeAttr(canonical))
}

function escapeAttr(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
}

if (!template.includes('<!--app-html-->')) {
  throw new Error('Built index.html is missing the <!--app-html--> marker')
}

const written = []
for (const route of routes) {
  const appHtml = render(route.url)
  const html = fill(template, route.meta).replace('<!--app-html-->', appHtml)
  const file = path.join(dist, route.file)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  written.push({ ...route, html, file })
}

const forbidden = [
  '\u2014',
  '\u2013',
  'following departure',
  'HIPAA',
  'HITRUST',
  'ARC-AMPE',
  'security questionnaire',
]
const requiredEverywhere = [
  profile.headline,
  profile.email,
  'GRC Assurance Engine',
  'Compliance Pipeline Case Study',
  'NIST 800-53 SSP in OSCAL',
  'https://grc-assurance.davidoneal.dev/',
  'labs.davidoneal.dev',
]

const labs = written.find((item) => item.url === '/labs').html
const home = written.find((item) => item.url === '/').html
const resume = written.find((item) => item.url === '/resume').html

function visibleText(html) {
  return html
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&#39;', "'")
}

function assertIncludes(html, needles, label) {
  const text = visibleText(html)
  const missing = needles.filter((needle) => !text.includes(needle))
  if (missing.length) {
    throw new Error(`${label} is missing:\n${missing.join('\n')}`)
  }
}

for (const page of written) {
  for (const word of forbidden) {
    if (page.html.includes(word)) {
      throw new Error(`${page.url} contains forbidden text: ${word}`)
    }
  }
  assertIncludes(page.html, requiredEverywhere, page.url)
}

assertIncludes(home, [
  'Open to remote GRC roles and 1099 healthcare GRC consulting',
  'Try the live demo',
  'Email me',
  'Map controls',
  'Automate evidence',
  'Explain findings',
  'Auditor gets:',
  "Arkansas Children's Hospital",
  'ISO 27001 Lead Auditor (in progress)',
  'a bank that followed SOC 2',
], 'home')

assertIncludes(labs, [
  ...projects.map((project) => project.name),
  ...proof.map((item) => item.url),
  ...experience.map((job) => job.company),
  ...certifications.map((cert) => cert.name),
  ...skillGroups.flatMap((group) => group.items),
  '40% AT RISK',
  '78% NEEDS IMPROVEMENT',
  '83% GOOD',
  'PDQ Deploy',
  'PDQ Connect',
  'biomedical equipment',
], 'labs')

assertIncludes(resume, [
  'Independent GRC engineering work',
  '78% NEEDS IMPROVEMENT',
  '83% GOOD',
  '40% AT RISK',
  'ISO 27001 Lead Auditor',
  'a bank that followed SOC 2',
  'Arkansas Children',
], 'resume')

if (!fs.existsSync(path.join(dist, 'Profile.png'))) {
  throw new Error('dist/Profile.png is missing, so the Open Graph image would not resolve')
}

console.log(`Prerendered ${written.map((item) => item.file).join(', ')}`)
