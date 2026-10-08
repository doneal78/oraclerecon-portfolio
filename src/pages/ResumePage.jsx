import '../App.css'
import './ResumePage.css'
import { Download, ExternalLink, Mail, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const btn = {
  display: 'flex', alignItems: 'center', gap: '0.4rem',
  padding: '0.5rem 1rem', background: 'var(--accent)', color: 'white',
  borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem'
}
const link = (color) => ({ display: 'flex', alignItems: 'center', gap: '0.35rem', color, textDecoration: 'none' })

function ResumePage() {
  return (
    <div id="resume-page" style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', padding: '0.875rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>David O'Neal | Resume</div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>← Portfolio</a>
          <a href="/resume.pdf" download style={btn}><Download size={14} /> Download PDF</a>
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.25rem' }}>David O'Neal</h1>
          <div style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'Courier New, monospace', letterSpacing: '0.05em' }}>
            MS, Cybersecurity · Certified GRC Engineer, Auditor Specialty (CGE-AUD)
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
            <a href="tel:5017494031" style={link('var(--text-secondary)')}><Phone size={13} /> (501) 749-4031</a>
            <a href="mailto:onealdavide@gmail.com" style={link('var(--text-secondary)')}><Mail size={13} /> onealdavide@gmail.com</a>
            <a href="https://linkedin.com/in/david-oneal" target="_blank" rel="noopener noreferrer" style={link('var(--accent)')}><FaLinkedin size={13} /> linkedin.com/in/david-oneal</a>
            <a href="https://github.com/doneal78" target="_blank" rel="noopener noreferrer" style={link('var(--accent)')}><FaGithub size={13} /> github.com/doneal78</a>
            <a href="https://davidoneal.dev" target="_blank" rel="noopener noreferrer" style={link('var(--accent-green)')}><ExternalLink size={13} /> davidoneal.dev</a>
          </div>
        </div>

        <Section title="Executive Summary">
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            Certified GRC Engineer (Auditor Specialty) with 8+ years across compliance, risk management, and security operations in financial services, government, and MSSP consulting. Builds automated compliance controls using Terraform, OPA/Rego, GitHub Actions, Cosign, and OSCAL to replace manual audit work with engineered assurance. Portfolio includes an end-to-end NIST 800-53 compliance pipeline with a verifiable evidence chain of custody. Targeting GRC Engineer, Compliance Engineer, and DevSecOps Engineer (compliance focus) roles.
          </p>
        </Section>

        <Section title="Projects">
          <Project name="GRC Engineering Pipeline" url="https://github.com/doneal78/grc-engineering-pipeline"
            tools="Terraform, OPA/Rego, Conftest, GitHub Actions, Cosign, Sigstore, AWS (S3, CloudTrail, KMS, IAM), Python, OSCAL, compliance-trestle"
            proof="6/6 policy tests passing; merged compliant PR and a deliberately blocked regression PR visible in commit history">
            Built an evidence-first CI/CD pipeline enforcing NIST 800-53 controls (SC-28, AC-3, CM-6, AU-3) on AWS S3. Terraform defines the infrastructure; six Rego policies via OPA/Conftest test the plan before deployment; GitHub Actions blocks non-compliant PRs with branch protection; Cosign performs keyless signing of evidence artifacts with a Sigstore chain of custody; OSCAL 1.2.1 component definitions map every control to its evidence and validate with compliance-trestle.
          </Project>
          <Project name="Compliance Automation Lab" url="https://github.com/doneal78/grc-compliance-checker"
            tools="Python, boto3, Terraform, AWS S3, AWS IAM, AWS Security Hub"
            proof="Terraform baseline moved from 40% (AT RISK) to 78% (NEEDS IMPROVEMENT); remaining gap traced to one intentionally misconfigured test bucket and a physical MFA device pending setup on the lab IAM user, documented rather than hidden">
            Built an AWS S3 and IAM configuration scanner using Python and boto3 against a Terraform baseline, producing a before/after compliance score with root-cause detail on every failure.
          </Project>
        </Section>

        <Section title="Experience">
          <Job title="Career Transition: GRC Engineering Portfolio Development" company="Remote" period="August 2026 – Present">
            <li>Focused on completing GRC Engineering portfolio work following departure from Legato Security</li>
            <li>Shipped an end-to-end compliance automation pipeline (Terraform, OPA/Rego, GitHub Actions, Cosign, OSCAL) mapped to NIST 800-53 (SC-28, AC-3, CM-6, AU-3) with 6/6 policy tests passing and verifiable merged and blocked PR history</li>
            <li>Actively applying to GRC Engineer and Compliance Engineer roles at financial services, regulated healthcare, government, and energy and utilities organizations</li>
          </Job>
          <Job title="Project Manager" company="Legato Security (Managed Security Service Provider)" period="September 2025 – July 2026"
            note="Rehired into this role after a company-wide reduction in force ended the Cybersecurity Consultant position below; two months between roles.">
            <li>Led security service delivery for 10+ enterprise client accounts, coordinating across SOC analysts, engineers, and channel partners to keep projects on track</li>
            <li>Built and managed onboarding workflows in GuideCX with milestone tracking that got new clients up and running faster</li>
            <li>Wrote Quarterly Business Reviews (QBRs) and delivery updates translating technical security work into plain language for client leadership</li>
            <li>Designed the connector setup workflow for Mave so engineers had a documented, repeatable process for configuring client integrations</li>
          </Job>
          <Job title="Cybersecurity Consultant" company="Legato Security" period="April 2025 – July 2025">
            <li>Designed and led patch and vulnerability management programs for aerospace and industrial clients across 279+ endpoints, prioritizing CVEs by risk level and business impact</li>
            <li>Used Tenable.io, Nessus, and PDQ Connect to cut critical vulnerability remediation from several weeks to under 72 hours, more than 80% faster</li>
            <li>Built a Patching-as-a-Service delivery framework that standardized remediation across client environments and reduced manual coordination effort</li>
            <li>Authored patching SOPs, risk classifications, and remediation documentation to strengthen governance and audit readiness</li>
          </Job>
          <Job title="State IT Security Specialist" company="Arkansas Department of Public Safety" period="October 2024 – March 2025"
            note="Position eliminated due to state budget reallocation.">
            <li>Maintained patch compliance above 95% across 500+ endpoints through automated deployment and consistent remediation tracking</li>
            <li>Handled IAM for the department, including provisioning, deprovisioning, MFA resets, and access reviews in Active Directory and Azure AD</li>
            <li>Built vulnerability dashboards and KPI reports that gave IT leadership a clear picture of current risk</li>
          </Job>
          <Job title="SOC Analyst" company="Bank OZK" period="October 2021 – June 2024">
            <li>Investigated and resolved 30+ phishing, malware, BEC, and DLP incidents per week in a financial-sector SOC, completing phishing investigations in under 20 minutes while maintaining SLAs and documenting findings for audit</li>
            <li>Reduced phishing false-positive alerts by 40% through detection rule tuning across Proofpoint, Microsoft Defender, and Cisco SEG</li>
            <li>Wrote DLP response SOPs that standardized how the team handled incidents and kept everything traceable</li>
            <li>Worked with the security awareness team on phishing simulations and reporting habits; phishing incidents dropped 40% over the same period</li>
          </Job>
          <Job title="System Operations Analyst I" company="FIS Global" period="June 2017 – October 2021">
            <li>Provided 24/7 enterprise systems monitoring using Splunk, responding in real time to service disruptions and supporting incident root cause analysis</li>
            <li>Maintained operational playbooks and documentation to support audit compliance and SLA consistency</li>
            <li>Coordinated with global support teams</li>
          </Job>
        </Section>

        <Section title="Skills">
          <SkillRow label="Compliance Automation and Policy-as-Code" items="OPA/Rego, Conftest, Sigstore/Cosign, OSCAL 1.2.1, compliance-trestle, NIST 800-53, SOC 2" />
          <SkillRow label="Infrastructure as Code" items="Terraform, GitHub Actions, AWS (S3, CloudTrail, KMS, IAM)" />
          <SkillRow label="Compliance and Risk Management" items="Risk register management, remediation tracking, patch compliance tracking, KPI and dashboard reporting" />
          <SkillRow label="Security Operations" items="SIEM tuning, phishing/malware/BEC/DLP investigation, detection engineering, incident response" />
          <SkillRow label="Identity and Access" items="Active Directory, Azure AD, MFA enforcement, provisioning and deprovisioning, access reviews" />
          <SkillRow label="Vulnerability Management" items="Tenable.io, Nessus, PDQ Connect, CVSS-based prioritization" />
          <SkillRow label="Languages and Tools" items="Python, boto3, Bash, JSON, YAML" />
        </Section>

        <Section title="Education">
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Master of Science (MS), Cybersecurity</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Maryville University</div>
          </div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Bachelor of Science (BS), Information Technology</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>University of Arkansas Grantham</div>
          </div>
        </Section>

        <Section title="Certifications">
          <CertRow name="Certified GRC Engineer, Auditor Specialty (CGE-AUD)" issuer="GRC Engineering Club" url="https://cert.grcengclub.com/verify/cgeaud-3f4e4e28-c2e9-4162-9b6b-48e06b47caaf" />
          <CertRow name="GRC Jumpstart: GRC Foundations in Cybersecurity" issuer="SimplyCyber" />
          <CertRow name="Vulnerability Management Detection and Response" issuer="Qualys" />
        </Section>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>davidoneal.dev · github.com/doneal78</div>
          <a href="/resume.pdf" download style={btn}><Download size={14} /> Download PDF</a>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'Courier New, monospace', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function Job({ title, company, period, note, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div className="resume-flex" style={{ marginBottom: '0.25rem' }}>
        <div style={{ fontWeight: '700', fontSize: '0.95rem', textAlign: 'left' }}>{title}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'Courier New, monospace', textAlign: 'right' }}>{period}</div>
      </div>
      <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.5rem', textAlign: 'left' }}>{company}</div>
      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.8' }}>
        {children}
      </ul>
      {note && <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>{note}</p>}
    </div>
  )
}

function Project({ name, url, tools, proof, children }) {
  return (
    <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
        <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{name}</div>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none', fontFamily: 'Courier New, monospace' }}>
          <ExternalLink size={11} /> GitHub
        </a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '0.4rem' }}>{children}</p>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
        <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Tools: </span>{tools}
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontFamily: 'Courier New, monospace' }}>✓ {proof}</div>
    </div>
  )
}

function SkillRow({ label, items }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
      <div style={{ fontWeight: '600', color: 'var(--text-primary)', minWidth: '180px', flexShrink: 0 }}>{label}</div>
      <div style={{ color: 'var(--text-secondary)' }}>{items}</div>
    </div>
  )
}

function CertRow({ name, issuer, url }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.875rem', flexWrap: 'wrap', gap: '0.25rem' }}>
      <span style={{ fontWeight: '600' }}>{name}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{issuer}</span>
        {url && <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)', fontSize: '0.75rem', fontFamily: 'Courier New, monospace', textDecoration: 'none' }}>Verify ↗</a>}
      </div>
    </div>
  )
}

export default ResumePage
