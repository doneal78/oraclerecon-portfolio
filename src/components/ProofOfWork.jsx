import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const proofItems = [
  {
    tag: 'GREEN PR',
    label: 'Compliant PR — all 6 policy tests passing, merged cleanly',
    url: 'https://github.com/doneal78/grc-club-week3/pull/1'
  },
  {
    tag: 'RED PR',
    label: 'Blocked PR — SC-28 encryption regression caught and stopped by branch protection',
    url: 'https://github.com/doneal78/grc-club-week3/pull/2'
  },
  {
    tag: 'TAMPER TEST',
    label: 'CHAIN INTACT vs FAIL — one appended byte breaks the cryptographic chain immediately',
    url: 'https://github.com/doneal78/grc-club-week3/actions'
  },
  {
    tag: 'OSCAL VALID',
    label: 'trestle validate returning VALID on both component definition and profile documents',
    url: 'https://github.com/doneal78/grc-oscal-ssp'
  },
  {
    tag: 'POLICY TESTS',
    label: '6 of 6 OPA/Rego policy tests passing across SC-28, AC-3, CM-6, and AU-3 controls',
    url: 'https://github.com/doneal78/grc-club-week2'
  },
  {
    tag: 'CASE STUDY',
    label: 'Full end-to-end portfolio case study with proof links for every claim',
    url: 'https://github.com/doneal78/grc-engineering-pipeline/blob/main/PORTFOLIO-CASE-STUDY.md'
  }
]

function ProofOfWork() {
  return (
    <motion.section
      id="proof"
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="section-title">
        <Shield size={28} className="inline-icon" /> Proof of Work
      </h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
        Every claim in this portfolio links to verifiable evidence. Click any item below to inspect the proof directly on GitHub.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {proofItems.map((item) => (
          <a key={item.tag} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.div
              className="project-card"
              whileHover={{ boxShadow: '0 0 28px var(--accent-glow)' }}
              style={{ cursor: 'pointer', height: '100%' }}
            >
              <div style={{
                display: 'inline-block',
                fontFamily: 'Courier New, monospace',
                fontSize: '0.72rem',
                fontWeight: '700',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                borderRadius: '4px',
                padding: '0.2rem 0.5rem',
                marginBottom: '0.75rem',
                letterSpacing: '0.08em'
              }}>
                {item.tag}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {item.label}
              </p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-green)', fontSize: '0.82rem', fontFamily: 'Courier New, monospace' }}>
                View on GitHub ↗
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}

export default ProofOfWork