import { motion, useInView, useMotionValue, useSpring, animate, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Mail, ExternalLink, Download, Shield, Cpu, Lock, Database, Globe, Zap, Link, Code, Briefcase, Calendar, Sun, Moon } from 'lucide-react'
import './App.css'
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa'
import CyberBackground from './components/CyberBackground'
import ProofOfWork from './components/ProofOfWork'

const portfolioData = {
  name: "David O'Neal",
  title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",title: "GRC Engineer | Compliance Automation | Python, Terraform, AWS",
  location: "Cabot, AR | Remote",
  email: "onealdavide@gmail.com",
  phone: "(501) 749-4031",
  linkedin: "https://linkedin.com/in/david-oneal",
 gitlab: "https://gitlab.com/doneal78-group",
 github: "https://github.com/doneal78",
 grcClub: "https://directory.grcengclub.com/engineers/doneal78/",
  stats: [
   { value: 10, suffix: "", label: "Projects Built on AWS" },
    { value: 83, suffix: "%", label: "Compliance Score Achieved" },
    { value: 6, suffix: "/6", label: "Policy Tests Passing" },
    { value: 21, suffix: "", label: "NIST 800-53 Controls Mapped" },
  ],
  experience: [
    {
      title: "Project Manager",
      company: "Legato Security",
      period: "Sep 2025 – Jul 2026",
      bullets: [
        "Lead security service delivery for 10+ enterprise client accounts at an MSSP, coordinating across SOC analysts, engineers, and channel partners.",
        "Build and manage onboarding workflows in GuideCX with milestone tracking that gets new clients up and running faster.",
        "Write QBRs and delivery updates that translate technical security work into plain language for client leadership.",
        "Designed the connector setup workflow for Mave, a documented, repeatable process for engineers configuring client integrations."
      ]
    },
    {
      title: "Cybersecurity Consultant",
      company: "Legato Security",
      period: "Apr 2025 – Jul 2025",
      bullets: [
        "Managed vulnerability and patch remediation for 279+ endpoints across regulated aerospace and industrial client environments.",
        "Cut critical vulnerability remediation from several weeks to under 72 hours (more than 80% faster) using Tenable.io, Nessus, and PDQ Deploy.",
        "Built a Patching-as-a-Service delivery framework that standardized remediation across client environments.",
        "Developed audit-ready SOPs, risk classifications, and remediation documentation for regulated clients."
      ]
    },
    {
      title: "State IT Security Specialist",
      company: "Arkansas Department of Public Safety",
      period: "Oct 2024 – Mar 2025",
      bullets: [
        "Maintained patch compliance above 95% across 500+ endpoints through automated deployment and remediation tracking.",
        "Handled IAM for the department: provisioning, deprovisioning, MFA resets, and access reviews in Active Directory and Azure AD.",
        "Mapped controls to NIST 800-53, collected audit evidence, and prepared compliance documentation for state regulatory audits.",
        "Built vulnerability dashboards and KPI reports that gave IT leadership a clear picture of current risk."
      ]
    },
    {
      title: "SOC Analyst",
      company: "Bank OZK",
      period: "Oct 2021 – Jun 2024",
      bullets: [
        "Investigated and resolved 30+ phishing, malware, BEC, and DLP incidents per week in a financial-sector SOC.",
        "Reduced phishing false-positive alerts by 40% through detection rule tuning across Proofpoint, Microsoft Defender, and Cisco SEG.",
        "Developed DLP incident response procedures that standardized investigations and improved audit traceability.",
        "Completed phishing investigations in under 20 minutes while maintaining response SLAs."
      ]
    },
    {
      title: "System Operations Analyst I",
      company: "FIS Global",
      period: "Jun 2017 – Oct 2021",
      bullets: [
        "Provided 24/7 enterprise systems monitoring using Splunk, responding in real time to service disruptions.",
        "Maintained operational playbooks and documentation to support audit compliance and SLA consistency.",
        "Coordinated with global support teams to meet uptime targets and deliver timely status updates."
      ]
    }
  ],
  summary: `I'm an IT and cybersecurity professional with 8+ years in technology, including 4+ years in security-focused roles spanning financial services, government, aerospace, and industrial environments. I specialize in GRC engineering, AI security governance, and building repeatable security processes through automation.

At Bank OZK I worked as a SOC Analyst investigating phishing, malware, BEC, and DLP incidents daily, tuning detection rules that cut false positives by 40%. At Legato Security I led vulnerability and patch management for enterprise clients, cutting critical remediation timelines from several weeks to under 72 hours. At the Arkansas Department of Public Safety I maintained 95%+ patch compliance across 500+ endpoints and mapped controls directly to NIST 800-53 for state regulatory audits.

Outside of my day job I founded OracleRecon, an independent GRC and AI security consultancy, where I deliver risk assessments, compliance program development, and AI governance frameworks for SMBs. I hold an M.S. in Cybersecurity from Maryville University and stay sharp through hands-on labs and continuous learning.`,
  skills: {
         cloud: ["AWS Security Hub", "AWS Config", "AWS CloudTrail", "AWS S3", "AWS KMS", "AWS IAM", "AWS Lambda", "EventBridge", "Microsoft Azure (Azure AD)"],
   security: ["NIST 800-53", "ISO 27001", "SOC 2", "PCI DSS", "OPA/Rego", "Conftest", "OSCAL 1.2.1", "compliance-trestle", "Cosign/Sigstore"],
    tools: ["Tenable.io", "Nessus", "PDQ Deploy", "Splunk", "Microsoft Sentinel", "Chronicle SIEM", "CrowdStrike", "Microsoft Defender", "Proofpoint", "Cisco SEG", "Jira", "GuideCX", "Google Gemini API", "Ollama (local LLMs)"],
    programming: ["Python", "boto3", "Bash", "Terraform", "GitHub Actions", "JSON", "YAML", "Flask", "SQLite"],
    grc: ["NIST 800-53 Rev 5", "SOC 2 TSC", "ISO 27001", "PCI DSS", "FFIEC", "GLBA", "FedRAMP/RMF"],
    other: ["AI Risk Assessment", "LLM-assisted Policy Generation", "Prompt Engineering", "Vulnerability Management", "SOC Analysis", "Incident Response", "Threat Hunting", "Detection Tuning", "Patch Automation", "SLA Compliance"]
  },
  certifications: [
    { name: "Certified GRC Engineer, Auditor Specialty (CGE-AUD)", year: "2026" },
    { name: "GRC Foundations in Cybersecurity", year: "2024" },
    { name: "Practical Security Analyst Assessment (PSAA)", year: "In Progress" },
    { name: "Introduction to Hacking Methodology", year: "2026" },
    { name: "Level 1 Cyber Threat Hunting Training", year: "2024" },
    { name: "SOAR Analyst (Google Cloud Siemplify)", year: "2024" },
    { name: "XM Cyber Exposure Management", year: "2024" },
    { name: "VMDR (Qualys)", year: "2024" },
    { name: "Insider Threat Detection (Teramind)", year: "2024" },
    { name: "Chronicle SIEM Fundamentals", year: "2024" },
    { name: "M.S. in Cybersecurity, Maryville University", year: "2021" }
  ],
  projects: [
    {
      name: "Compliance Automation Lab",
      description: "A live GRC engineering build following the AJ Yawn GRC Engineering for AWS curriculum. Started with four Python tools covering control mapping across NIST 800-53, ISO 27001, and SOC 2, automatic risk scoring in a Flask web app, a compliance evidence collector that pulls audit artifacts from APIs, and an AI policy generator running through Ollama. Moved into infrastructure with a boto3 AWS Config compliance checker and a Terraform baseline that took a live AWS account from 40% AT RISK to 78% NEEDS IMPROVEMENT. Security Hub CSPM followed with FSBP and CIS v1.2.0. Extended with GRC Engineering Club weekly challenges: a GitHub Actions CI/CD gate that blocks non-compliant configs before merge, Cosign keyless signing with tamper verification on infrastructure artifacts, and a NIST 800-53 Rev 5 baseline deployed into a live Security Hub account.",
      technologies: ["Python", "Terraform", "AWS Security Hub", "boto3", "GitHub Actions", "Flask", "Ollama", "NIST 800-53"],
      githubLink: "https://github.com/doneal78/grc-compliance-checker",
      labsLink: "https://labs.davidoneal.dev",
      achievements: [
        "Terraform baseline moved a live AWS account from 40% AT RISK to 78% NEEDS IMPROVEMENT",
        "GitHub Actions CI/CD gate blocks non-compliant infrastructure configs before merge",
        "Cosign keyless signing with tamper verification on infrastructure artifacts",
        "NIST 800-53 Rev 5 baseline deployed into live AWS Security Hub alongside FSBP and CIS v1.2.0"
      ]
    },
    {
      name: "SOC 2 Evidence Pipeline",
      description: "A fully automated SOC 2 evidence collection pipeline built on AWS. Pulls Security Hub findings and AWS Config compliance data using boto3, processes them through pandas, and generates a formatted Excel workbook with separate sheets for each Trust Services Criteria category. Designed to replace manual screenshot-based evidence collection with a repeatable, auditable, code-driven process.",
      technologies: ["Python", "boto3", "AWS Security Hub", "AWS Config", "pandas", "Excel", "SOC 2"],
      githubLink: "https://github.com/doneal78/grc-soc2-pipeline",
      achievements: [
        "Pulls live Security Hub findings and Config compliance data automatically via boto3",
        "Generates formatted Excel workbook with sheets mapped to SOC 2 Trust Services Criteria",
        "Replaces manual screenshot-based evidence collection with a repeatable code-driven process",
        "Built without Audit Manager which is unavailable in new AWS accounts"
      ]
    },
    {
      name: "GRC Engineering Pipeline",
      description: "An end-to-end, evidence-first GRC automation pipeline submitted to the GRC Engineering Club prize pool. Terraform defines compliant AWS S3 storage implementing SC-28, AC-3, CM-6, and AU-3. Rego policies test the Terraform plan before deployment with 6 of 6 tests passing. GitHub Actions gates every pull request and blocks non-compliant merges at the platform level. Cosign provides keyless signing with cryptographic chain of custody on all evidence artifacts. OSCAL maps every control claim to signed evidence, validated with trestle returning VALID on both documents.",
      technologies: ["Terraform", "Rego/OPA", "Conftest", "GitHub Actions", "Cosign", "Sigstore", "OSCAL", "compliance-trestle", "AWS S3", "NIST 800-53"],
      githubLink: "https://github.com/doneal78/grc-engineering-pipeline",
      achievements: [
        "6 of 6 Rego policy tests passing across SC-28, AC-3, CM-6, and AU-3 controls",
        "Deliberate SC-28 regression blocked at platform level by branch protection with preserved evidence artifact",
        "Tamper verification proves one appended byte breaks the cryptographic chain immediately",
        "Two OSCAL documents validated with trestle returning VALID on both"
      ]
    },
    {
      name: "Event-Driven Compliance Engine",
      description: "Serverless auto-remediation pipeline using AWS Lambda, EventBridge, SNS, and Terraform. Non-compliant resource configurations trigger an event that invokes a Lambda function to remediate the violation and send an SNS notification, all within seconds of detection. Demonstrates real-time compliance enforcement rather than periodic scanning.",
      technologies: ["AWS Lambda", "EventBridge", "SNS", "Terraform", "Python", "boto3", "NIST 800-53"],
      githubLink: "https://github.com/doneal78/grc-compliance-checker",
      achievements: [
        "Auto-remediation triggered and completed in 3.5 seconds from detection to resolution",
        "Event-driven architecture eliminates manual remediation steps entirely",
        "SNS notification chain provides auditable alert trail for every remediation action",
        "Terraform-managed infrastructure ensures the engine itself is version-controlled and reproducible"
      ]
    },
    {
      name: "CI/CD Compliance Pipeline",
      description: "GitHub Actions pipeline that runs Bandit SAST on every commit and pipes findings directly into AWS Security Hub. Non-compliant code is blocked from merging via branch protection rules. Compliance evidence is generated automatically on every build, eliminating manual evidence collection for code security controls.",
      technologies: ["GitHub Actions", "Bandit", "AWS Security Hub", "Python", "SAST", "CI/CD"],
      githubLink: "https://github.com/doneal78/grc-cicd-pipeline",
      achievements: [
        "Bandit SAST integrated into CI/CD gate, blocking non-compliant code before merge",
        "Security Hub findings automatically imported on every pipeline run",
        "Compliance evidence generated as a build artifact on every commit",
        "Branch protection enforces the gate so developers cannot bypass the compliance check"
      ]
    },
    {
      name: "Real-Time Compliance Dashboard",
      description: "Flask web application with SQLite backend and matplotlib visualizations that aggregates compliance findings from AWS Security Hub and Config into a live dashboard. Control status, failure trends, and remediation progress are visible in real time without leaving a browser. Built to replace spreadsheet-based compliance reporting.",
      technologies: ["Python", "Flask", "SQLite", "matplotlib", "AWS Security Hub", "AWS Config", "boto3"],
      githubLink: "https://github.com/doneal78/grc-compliance-checker",
      achievements: [
        "Live dashboard replacing manual spreadsheet-based compliance reporting",
        "Control status and failure trends visible in real time via browser",
        "Aggregates findings from both Security Hub and Config into a single view",
        "SQLite backend stores historical compliance data for trend analysis"
      ]
    },
    {
      name: "Okta API Compliance Collector",
      description: "Python tool that connects to a live Okta tenant via API and collects MFA enrollment status, inactive accounts, and access review evidence across real users. Outputs structured evidence files mapped to identity governance controls. Built against an actual Okta Integrator tenant with real test users, not mocked data.",
      technologies: ["Python", "Okta API", "boto3", "IAM", "Identity Governance", "NIST 800-53 AC-2"],
      githubLink: "https://github.com/doneal78/grc-compliance-checker",
      achievements: [
        "Pulls live MFA compliance data from a real Okta tenant via API",
        "67% compliance score produced from actual tenant data with specific gap analysis",
        "Evidence output mapped directly to NIST 800-53 AC-2 identity management controls",
        "Demonstrates identity governance automation beyond AWS-only compliance tooling"
      ]
    },
    {
      name: "OSCAL System Security Plan",
      description: "A machine-readable System Security Plan documenting 21 NIST 800-53 controls in OSCAL 1.2.1 format. Component definitions map each control to its implementation evidence and the signed artifacts that prove it. Validated with compliance-trestle returning VALID on both the component definition and profile documents. Designed for FedRAMP and federal compliance contexts where OSCAL is increasingly required.",
      technologies: ["OSCAL 1.2.1", "compliance-trestle", "NIST 800-53", "Python", "JSON", "FedRAMP"],
      githubLink: "https://github.com/doneal78/grc-oscal-ssp",
      achievements: [
        "21 NIST 800-53 controls documented in machine-readable OSCAL 1.2.1 format",
        "trestle validate returns VALID on both component definition and profile documents",
        "Control implementations mapped directly to Cosign-signed evidence artifacts",
        "Positions portfolio for FedRAMP and federal compliance roles requiring OSCAL fluency"
      ]
    },
  ],
   currentlyBuilding: [
    "CGE-P (Practitioner): Certified GRC Engineer Practitioner course — In Progress",
    "Project 11: Audit Readiness Pipeline — Chapter 9 of the GRC Engineering curriculum"
  ]
}

// Typewriter hook
function useTypewriter(text, speed = 40, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])
  return displayed
}

// Animated counter
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v))
    })
    return controls.stop
  }, [inView, value])

  return (
    <span ref={ref} className="stat-number">
      {display}{suffix}
    </span>
  )
}

function App() {
  const subtitle = useTypewriter(portfolioData.title, 38, 600)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`app ${theme}`}>
    <CyberBackground />
      <nav className="navbar">
        <motion.div
          className="nav-content"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="nav-name">{portfolioData.name}</h1>

          {/* Desktop nav */}
          <div className="nav-links desktop-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Resume</a>
          </div>

          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger button */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </motion.div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a href="#proof" onClick={closeMenu}>Proof</a>
            <a href="#contact" onClick={closeMenu}>Resume</a>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="section">
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-grid">
            <div className="hero-text">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {portfolioData.name}
              </motion.h1>
              <h2 className="hero-subtitle">
                {subtitle}
                <span className="cursor">|</span>
              </h2>
              <p className="hero-location">{portfolioData.location}</p>
              <div className="hero-social">
                <a href={portfolioData.grcClub} target="_blank" rel="noopener noreferrer" title="GRC Engineering Club"><img src="/grc-club.png" alt="GRC Engineering Club" style={{width:18,height:18,borderRadius:2,objectFit:'contain'}} /></a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={18} /></a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={18} /></a>
                <a href={portfolioData.gitlab} target="_blank" rel="noopener noreferrer" title="GitLab"><FaGitlab size={18} /></a>
                <a href="/resume.pdf" download title="Download Resume" className="resume-icon"><Download size={18} /></a>
              </div>
            </div>
            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="/Profile.png" alt="David O'Neal" />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {portfolioData.stats.map((s, i) => (
            <div key={i} className="stat-card">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="section-title">About Me</h3>
          <p className="about-text">{portfolioData.summary}</p>
        </motion.div>

        <motion.div
          className="now-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="section-title">
            <Zap size={20} className="inline-icon" />
            Currently Building
          </h3>
          <ul className="now-list">
            {portfolioData.currentlyBuilding.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">Skills & Expertise</h3>
          <div className="skills-grid">
            <SkillCard icon={<Cpu size={24} />} title="Cloud Platforms" skills={portfolioData.skills.cloud} delay={0} />
            <SkillCard icon={<Shield size={24} />} title="Security & Compliance" skills={portfolioData.skills.security} delay={0.1} />
            <SkillCard icon={<Lock size={24} />} title="Tools & Technologies" skills={portfolioData.skills.tools} delay={0.2} />
            <SkillCard icon={<Database size={24} />} title="Programming" skills={portfolioData.skills.programming} delay={0.3} />
            <SkillCard icon={<Globe size={24} />} title="GRC Frameworks" skills={portfolioData.skills.grc} delay={0.4} />
            <SkillCard icon={<Zap size={24} />} title="Other Skills" skills={portfolioData.skills.other} delay={0.5} />
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">Featured Projects</h3>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
      <ProofOfWork />
      {/* EXPERIENCE — animated timeline */}
      <section id="experience" className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">
            <Briefcase size={28} className="inline-icon" /> Experience
          </h3>
        </motion.div>
        <div className="timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          {portfolioData.experience.map((job, index) => (
            <TimelineCard key={index} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">Certifications</h3>
          <div className="certifications-grid">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.04, borderColor: 'var(--accent-green)' }}
              >
                <Shield size={20} className="cert-icon" />
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">Download Resume</h3>
          <div className="resume-download">
            <motion.a
              href="/resume.pdf"
              download
              className="download-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>© 2026 David O'Neal. Built with React & Vite. Deployed on Cloudflare Pages.</p>
      </footer>
    </div>
  )
}

function SkillCard({ icon, title, skills, delay = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
    >
      <div className="skill-header">
        {icon}
        <h4>{title}</h4>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: '0 0 40px var(--accent-glow)' }}
    >
      <h4 className="project-name">{project.name}</h4>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <ul className="project-achievements">
        {project.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.gitlabLink && (
          <a href={project.gitlabLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <Code size={16} /> GitLab
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} /> GitHub
          </a>
        )}
        {project.labsLink && (
          <a href={project.labsLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} /> GRC Labs
          </a>
        )}
      </div>
    </motion.div>
  )
}

function TimelineCard({ job, index }) {
  const isCurrent = false
  const entryNum = String(index + 1).padStart(2, '0')
  const startYear = job.period.match(/\d{4}/)?.[0] || ''
  const stardate = startYear ? `SD ${startYear}.${index + 1}` : ''

  return (
    <div className="timeline-row">
      {index > 0 && <span className="timeline-year">{stardate}</span>}
      <motion.div
        className={`timeline-dot ${isCurrent ? 'timeline-dot-current' : ''}`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
      />
      <motion.div
        className="timeline-card"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
        whileHover={{ boxShadow: '0 0 30px var(--accent-glow)' }}
      >
        <div className="timeline-card-header">
          <span className="timeline-entry-num">//{entryNum}</span>
          {isCurrent && (
            <motion.span
              className="timeline-current-badge"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              ● CURRENT
            </motion.span>
          )}
        </div>
        <div className="experience-header">
          <div>
            <h4 className="experience-title">{job.title}</h4>
            <p className="experience-company">{job.company}</p>
          </div>
          <div className="experience-period">
            <Calendar size={14} />
            {job.period}
          </div>
        </div>
        <ul className="experience-bullets">
          {job.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.07 + 0.3, duration: 0.4 }}
            >
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default App
