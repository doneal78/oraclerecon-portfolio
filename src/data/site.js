export const profile = {
  name: "David O'Neal",
  headline: "Building Governance & Controls that hold up in an audit",
  badge: "Open to remote GRC roles and 1099 healthcare GRC consulting",
  subline:
    "GRC Analyst and GRC Engineer | Compliance Automation | Remote, Arkansas. CGE-AUD. ISO/IEC 27001:2022 Lead Auditor Certificate of Competency.",
  email: "onealdavide@gmail.com",
  location: "Cabot, Arkansas",
  linkedin: "https://linkedin.com/in/david-oneal",
  github: "https://github.com/doneal78",
  grcClub: "https://directory.grcengclub.com/engineers/doneal78/",
  labs: "https://labs.davidoneal.dev",
  demo: "https://grc-assurance.davidoneal.dev/",
  walkthrough: "https://grc-assurance.davidoneal.dev/walkthrough/",
  resumePdf: "/resume.pdf",
  site: "https://davidoneal.dev",
}

export const whatIDo = [
  {
    title: "Map controls",
    text: "Across NIST 800-53, SOC 2, and ISO 27001.",
  },
  {
    title: "Automate evidence",
    text: "So audits stop depending on screenshots.",
  },
  {
    title: "Explain findings",
    text: "In plain language leadership can act on.",
  },
]

export const featured = [
  {
    name: "GRC Assurance Engine",
    summary: "Vendor and AI tool risk reviews with a tamper-evident decision trail.",
    auditor: "a traceable record of every decision.",
    href: profile.demo,
    label: "Live demo",
    external: true,
  },
  {
    name: "Compliance Pipeline Case Study",
    summary: "Automated evidence collection in my own AWS lab account.",
    auditor: "timestamped evidence on demand.",
    href: "/labs#compliance-pipeline",
    label: "Case study",
  },
  {
    name: "NIST 800-53 SSP in OSCAL",
    summary: "A machine-readable system security plan.",
    auditor: "a plan that can be checked automatically.",
    href: "/labs#oscal-ssp",
    label: "OSCAL",
  },
]

export const aboutShort =
  "8+ years in IT and security, including roles at Bank OZK, a bank that followed SOC 2, the Arkansas Department of Public Safety, and an MSSP. Before security, I spent 11 years at Arkansas Children's Hospital, including biomedical equipment work, so I know how a hospital runs day to day."

export const aboutLong = [
  "I have 8+ years in IT and security, across IT operations, security operations, compliance, and vulnerability management in financial services, government, aerospace, and industrial environments. That includes a SOC analyst seat at Bank OZK, a bank that followed SOC 2, a state IT security role at the Arkansas Department of Public Safety, and project and consulting work at Legato Security, an MSSP. Before security, I spent 11 years at Arkansas Children's Hospital, including biomedical equipment work.",
  "In my own AWS lab account I finished a ten-project compliance automation curriculum. The builds use Terraform, Python, boto3, OPA/Rego, GitHub Actions, Cosign, and OSCAL. I hold the Certified GRC Engineer, Auditor Specialty (CGE-AUD). I also hold an ISO/IEC 27001:2022 Lead Auditor Certificate of Competency from Mastermind Assurance, earned through training and a skills-based exam. The Practitioner course (CGE-P) is in progress.",
  "The lab account measured 40% AT RISK before any controls were deployed. After the Terraform baseline it measured 78% NEEDS IMPROVEMENT. After the ten projects it measured 83% GOOD. Those are three stages of the same account. At the 78% stage the remaining gap was one intentionally misconfigured test bucket and a physical MFA device still pending setup on the lab IAM user. I documented that gap.",
  "At Bank OZK I investigated phishing, malware, business email compromise, and DLP incidents, and tuned detection rules that cut phishing false positives by 40%. At Legato I led vulnerability and patch management for enterprise clients and cut critical remediation from several weeks to under 72 hours. At the Arkansas Department of Public Safety I kept patch compliance above 95% across 500+ endpoints and used Microsoft Sentinel and CrowdStrike.",
  "I have an M.S. in Cybersecurity from Maryville University and a B.S. in Information Technology, Cum Laude, from the University of Arkansas Grantham. The public build log for the lab work is on ControlRecon labs.",
]

export const posture = {
  intro: "One AWS lab account. Ten projects. Each score below is a stage of that account.",
  steps: [
    {
      score: "40%",
      status: "AT RISK",
      label: "Before",
      detail: "Baseline of my own AWS lab account, before any controls were deployed.",
    },
    {
      score: "78%",
      status: "NEEDS IMPROVEMENT",
      label: "After the Terraform baseline",
      detail:
        "S3 encryption, public access blocks, CloudTrail, and required tags were in place. The remaining gap was one intentionally misconfigured test bucket and a physical MFA device still pending setup on the lab IAM user. I documented that gap.",
    },
    {
      score: "83%",
      status: "GOOD",
      label: "After ten projects",
      detail:
        "The full curriculum was in the account: the CI/CD gate, Cosign signing, OSCAL documentation, and Okta identity controls, on top of the baseline.",
    },
  ],
}

export const stats = [
  { value: "10", label: "Projects built in my own AWS lab account" },
  { value: "83% GOOD", label: "After the ten-project curriculum" },
  { value: "6/6", label: "Policy tests passing" },
  { value: "21", label: "NIST 800-53 controls in the OSCAL SSP" },
]

export const projects = [
  {
    id: "grc-assurance-engine",
    name: "GRC Assurance Engine",
    flagship: true,
    description:
      "A Flask app for vendor and AI tool risk reviews. The same inputs and the same rule-set version produce the same result. A person records the decision, and the event log keeps a SHA-256 hash chain so a later change to that record is visible. The live demo uses synthetic data only. It is an illustrative prototype. The results are not approvals, certifications, or a substitute for a formal risk process.",
    auditor: "a traceable record of every decision.",
    technologies: ["Python", "Flask"],
    achievements: [
      "Evidence-first vendor and AI tool risk review, with the person's decision kept separate from the score",
      "Explainable rules: the same inputs and the same rule-set version produce the same result",
      "Tamper-evident record of each saved decision, chained with SHA-256",
      "The public demo runs on synthetic data and says so on the page",
    ],
    links: [
      { label: "Live demo", href: "https://grc-assurance.davidoneal.dev/" },
      { label: "Walkthrough", href: "https://grc-assurance.davidoneal.dev/walkthrough/" },
      { label: "GitHub", href: "https://github.com/doneal78/grc-assurance-engine" },
    ],
  },
  {
    id: "compliance-pipeline",
    name: "GRC Engineering Pipeline",
    flagship: true,
    cardName: "Compliance Pipeline Case Study",
    description:
      "An end-to-end, evidence-first GRC automation pipeline submitted to the GRC Engineering Club prize pool. It runs in my own AWS lab account. Terraform defines compliant AWS S3 storage implementing SC-28, AC-3, CM-6, and AU-3. Rego policies test the Terraform plan before deployment with 6 of 6 tests passing. GitHub Actions gates every pull request and blocks non-compliant merges at the platform level. Cosign provides keyless signing with a cryptographic chain of custody on the evidence artifacts. OSCAL maps every control claim to signed evidence, validated with trestle returning VALID on both documents. The published case study walks the same pipeline week by week, from the Terraform plan to the signed bundle.",
    auditor: "timestamped evidence on demand.",
    technologies: ["Terraform", "Rego/OPA", "Conftest", "GitHub Actions", "Cosign", "Sigstore", "OSCAL", "compliance-trestle", "AWS S3", "NIST 800-53"],
    achievements: [
      "6 of 6 Rego policy tests passing across SC-28, AC-3, CM-6, and AU-3 controls",
      "Deliberate CM-6 tagging violation blocked at platform level by branch protection with preserved evidence artifact",
      "Tamper verification proves one appended byte breaks the cryptographic chain immediately",
      "Two OSCAL documents validated with trestle returning VALID on both",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-engineering-pipeline" },
      { label: "Case study", href: "https://github.com/doneal78/grc-engineering-pipeline/blob/main/PORTFOLIO-CASE-STUDY.md" },
    ],
  },
  {
    id: "oscal-ssp",
    name: "OSCAL System Security Plan",
    flagship: true,
    cardName: "NIST 800-53 SSP in OSCAL",
    description:
      "A machine-readable System Security Plan documenting 21 NIST 800-53 controls in OSCAL 1.2.1 format. Component definitions map each control to its implementation evidence and the signed artifacts that prove it. Validated with compliance-trestle returning VALID on both the component definition and profile documents. Written for environments where an assessor needs to check the plan from the file, including FedRAMP and federal reviews that ask for OSCAL.",
    auditor: "a plan that can be checked automatically.",
    technologies: ["OSCAL 1.2.1", "compliance-trestle", "NIST 800-53", "Python", "JSON", "FedRAMP"],
    achievements: [
      "21 NIST 800-53 controls documented in machine-readable OSCAL 1.2.1 format",
      "trestle validate returns VALID on both component definition and profile documents",
      "Control implementations mapped directly to Cosign-signed evidence artifacts",
      "Each control in the component definition points at the signed artifact that supports it",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-oscal-ssp" },
    ],
  },
  {
    id: "compliance-automation-lab",
    name: "Compliance Automation Lab",
    description:
      "A GRC engineering build in my own AWS lab account, following the AJ Yawn GRC Engineering for AWS curriculum. It started with four Python tools: control mapping across NIST 800-53, ISO 27001, and SOC 2, automatic risk scoring in a Flask web app, a compliance evidence collector that pulls audit artifacts from APIs, and an AI policy generator running through Ollama. Infrastructure work added a boto3 AWS Config compliance checker and a Terraform baseline. That baseline stage moved the lab account from 40% AT RISK to 78% NEEDS IMPROVEMENT. Security Hub CSPM followed with FSBP and CIS v1.2.0. GRC Engineering Club weekly challenges extended the lab: a GitHub Actions CI/CD gate that blocks non-compliant configs before merge, Cosign keyless signing with tamper verification on infrastructure artifacts, and a NIST 800-53 Rev 5 baseline deployed into Security Hub in the same lab account. After the ten projects, that account measured 83% GOOD.",
    technologies: ["Python", "Terraform", "AWS Security Hub", "boto3", "GitHub Actions", "Flask", "Ollama", "NIST 800-53"],
    achievements: [
      "Terraform baseline moved my own AWS lab account from 40% AT RISK to 78% NEEDS IMPROVEMENT",
      "After the ten projects, the same lab account measured 83% GOOD",
      "GitHub Actions CI/CD gate blocks non-compliant infrastructure configs before merge",
      "Cosign keyless signing with tamper verification on infrastructure artifacts",
      "NIST 800-53 Rev 5 baseline deployed into AWS Security Hub in that lab account, alongside FSBP and CIS v1.2.0",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-compliance-checker" },
      { label: "ControlRecon labs", href: "https://labs.davidoneal.dev" },
    ],
  },
  {
    id: "soc2-evidence-pipeline",
    name: "SOC 2 Evidence Pipeline",
    description:
      "A fully automated SOC 2 evidence collection pipeline built in my own AWS lab account. It pulls Security Hub findings and AWS Config compliance data using boto3, processes them through pandas, and generates a formatted Excel workbook with separate sheets for each Trust Services Criteria category. Designed to replace manual screenshot-based evidence collection with a repeatable, auditable, code-driven process.",
    technologies: ["Python", "boto3", "AWS Security Hub", "AWS Config", "pandas", "Excel", "SOC 2"],
    achievements: [
      "Pulls live Security Hub findings and Config compliance data automatically via boto3",
      "Generates formatted Excel workbook with sheets mapped to SOC 2 Trust Services Criteria",
      "Replaces manual screenshot-based evidence collection with a repeatable code-driven process",
      "Built without Audit Manager, which is unavailable in new AWS accounts",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-soc2-pipeline" },
    ],
  },
  {
    id: "event-engine",
    name: "Event-Driven Compliance Engine",
    description:
      "Auto-remediation in my own AWS lab account, on Lambda, EventBridge, and SNS, deployed entirely with Terraform. When AWS Config flags an S3 bucket as non-compliant for public read or write, EventBridge routes the event to a Lambda function that re-enables all four public access block settings and sends an SNS email confirming the fix.",
    technologies: ["AWS Lambda", "EventBridge", "AWS Config", "SNS", "Terraform", "Python", "boto3"],
    achievements: [
      "Detect-to-fix loop runs in about 3.5 seconds with no human intervention",
      "Remediation proven against a real non-compliant bucket, verified in CloudWatch logs and get-public-access-block output",
      "Least-privilege IAM role scoped to only the S3, CloudWatch Logs, and SNS actions the function needs",
      "Local test runner covers the remediate, compliant-skip, and unhandled-rule paths",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-event-engine" },
    ],
  },
  {
    id: "cicd-pipeline",
    name: "CI/CD Compliance Pipeline",
    description:
      "GitHub Actions pipeline that runs Bandit SAST on every commit and pipes findings directly into AWS Security Hub in my own lab account. Non-compliant code is blocked from merging via branch protection rules. Compliance evidence is generated automatically on every build, eliminating manual evidence collection for code security controls.",
    technologies: ["GitHub Actions", "Bandit", "AWS Security Hub", "Python", "SAST", "CI/CD"],
    achievements: [
      "Bandit SAST integrated into the CI/CD gate, blocking non-compliant code before merge",
      "Security Hub findings automatically imported on every pipeline run",
      "Compliance evidence generated as a build artifact on every commit",
      "Branch protection enforces the gate so developers cannot bypass the compliance check",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-cicd-pipeline" },
    ],
  },
  {
    id: "compliance-dashboard",
    name: "Real-Time Compliance Dashboard",
    description:
      "Flask web application with a SQLite backend and matplotlib visualizations that aggregates compliance findings from AWS Security Hub and Config into a live dashboard. Control status, failure trends, and remediation progress are visible in real time without leaving a browser. Built to replace spreadsheet-based compliance reporting. The AWS data comes from my own lab account.",
    technologies: ["Python", "Flask", "SQLite", "matplotlib", "AWS Security Hub", "AWS Config", "boto3"],
    achievements: [
      "Live dashboard replacing manual spreadsheet-based compliance reporting",
      "Control status and failure trends visible in the browser",
      "Aggregates findings from both Security Hub and Config into a single view",
      "SQLite backend stores historical compliance data for trend analysis",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-dashboard" },
    ],
  },
  {
    id: "okta-collector",
    name: "Okta API Compliance Collector",
    description:
      "Python tool that connects to a live Okta tenant through the REST API and collects SOC 2 identity evidence: the user roster, per-user MFA enrollment, group memberships, and authentication logs. Each dataset is mapped to its Trust Services Criterion and written to a structured Excel evidence workbook.",
    technologies: ["Python", "Okta REST API", "pandas", "SOC 2", "Identity Governance"],
    achievements: [
      "67% MFA compliance score from real tenant data, with the failing user documented as a CC6.6 finding",
      "Evidence mapped to SOC 2 CC6.1, CC6.3, CC6.6, and CC7.2",
      "Follows Okta's Link header pagination and handles free-tier rate limits gracefully",
      "Credentials kept out of source code with python-dotenv",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/doneal78/grc-okta-collector" },
    ],
  },
]

export const proof = [
  {
    tag: "GREEN PR",
    label: "Compliant PR: all 6 policy tests passing, merged cleanly",
    url: "https://github.com/doneal78/grc-club-week3/pull/1",
  },
  {
    tag: "RED PR",
    label: "Blocked PR: a CM-6 violation (required ComplianceScope tag removed) caught and stopped by branch protection",
    url: "https://github.com/doneal78/grc-club-week3/pull/2",
  },
  {
    tag: "TAMPER TEST",
    label: "CHAIN INTACT vs FAIL: one appended byte breaks the signed evidence chain immediately",
    url: "https://github.com/doneal78/grc-club-week3/actions",
  },
  {
    tag: "OSCAL VALID",
    label: "trestle validate returning VALID on both component definition and profile documents",
    url: "https://github.com/doneal78/grc-oscal-ssp",
  },
  {
    tag: "POLICY TESTS",
    label: "6 of 6 OPA/Rego policy tests passing across SC-28, AC-3, and CM-6",
    url: "https://github.com/doneal78/grc-club-week2",
  },
  {
    tag: "CASE STUDY",
    label: "Full end-to-end case study with a proof link for every claim",
    url: "https://github.com/doneal78/grc-engineering-pipeline/blob/main/PORTFOLIO-CASE-STUDY.md",
  },
]

export const experience = [
  {
    title: "Independent GRC Engineering",
    company: "Remote",
    period: "August 2026 to Present",
    bullets: [
      "Independent GRC engineering work: completed a ten-project compliance automation curriculum in my own AWS lab account and earned CGE-AUD.",
      "Shipped an end-to-end compliance automation pipeline (Terraform, OPA/Rego, GitHub Actions, Cosign, OSCAL) mapped to NIST 800-53 controls SC-28, AC-3, CM-6, and AU-3, with 6 of 6 policy tests passing and a merged pull request plus a blocked pull request in the history.",
      "Project 11, an audit readiness pipeline from chapter 9 of the curriculum, is underway. The Certified GRC Engineer Practitioner course (CGE-P) is in progress. Earned the ISO/IEC 27001:2022 Lead Auditor Certificate of Competency through training and a skills-based exam (Mastermind Assurance, November 2026).",
    ],
  },
  {
    title: "Project Manager",
    company: "Legato Security (Managed Security Service Provider)",
    place: "United States, Remote",
    period: "September 2025 to July 2026",
    note: "Rehired into this role after a company-wide reduction in force ended the Cybersecurity Consultant position below. Two months between roles.",
    bullets: [
      "Managed security service delivery for 10+ enterprise client accounts, working with SOC analysts, engineers, and channel partners.",
      "Built client onboarding workflows in GuideCX with milestone tracking.",
      "Wrote Quarterly Business Reviews (QBRs), status updates, delivery summaries, and client-facing setup documentation.",
      "Tracked project risks across client engagements.",
      "Explained onboarding steps in plain language to non-technical clients across Eastern, Central, Mountain, and Pacific time.",
    ],
  },
  {
    title: "Cybersecurity Consultant",
    company: "Legato Security",
    place: "United States, Remote",
    period: "April 2025 to July 2025",
    bullets: [
      "Designed and ran risk-based patch and vulnerability programs for aerospace and industrial clients across 279+ endpoints.",
      "Prioritized CVEs by CVSS, risk level, and business impact, working findings in Tenable.io and Nessus.",
      "Cut critical remediation from several weeks to under 72 hours, more than 80% faster.",
      "Wrote risk classifications, patching SOPs, and remediation documentation that clients used for governance and audits.",
      "Escalated high-risk and overdue items to client management.",
      "Built a Patching-as-a-Service framework and deployed patches with PDQ Connect.",
    ],
  },
  {
    title: "State IT Security Specialist",
    company: "Arkansas Department of Public Safety",
    place: "Little Rock, Arkansas, On-site",
    period: "October 2024 to March 2025",
    note: "Position eliminated due to state budget reallocation.",
    bullets: [
      "Kept patch compliance above 95% across 500+ endpoints using PDQ Deploy, Patch Manager Plus, and WSUS.",
      "Prioritized patching using vendor advisories, CISA alerts, the CISA KEV list, and Microsoft Patch Tuesday reports, and handled emergency vendor patch response.",
      "Reviewed and investigated security alerts in Microsoft Sentinel and CrowdStrike.",
      "Set up and reviewed user access for new employees and Troopers after training.",
      "Handled provisioning, deprovisioning, and MFA resets in Active Directory and Microsoft Entra ID.",
      "Tracked patching progress in an Excel workbook and reported status to my manager.",
    ],
  },
  {
    title: "SOC Analyst",
    company: "Bank OZK, a bank that followed SOC 2",
    period: "October 2021 to June 2024",
    bullets: [
      "Investigated and resolved 30+ phishing, malware, BEC, and DLP incidents per week in a financial-sector SOC, completing phishing investigations in under 20 minutes while maintaining SLAs and documenting findings for audit.",
      "Reduced phishing false-positive alerts by 40% through detection rule tuning on Proofpoint and Cisco SEG, and used Microsoft Defender for investigation and alert triage.",
      "Wrote DLP response SOPs that standardized how the team handled incidents and kept everything traceable.",
      "Worked with the security awareness team on phishing simulations and reporting habits. Phishing incidents dropped 40% over the same period.",
    ],
  },
  {
    title: "System Operations Analyst I",
    company: "FIS Global",
    period: "June 2017 to October 2021",
    bullets: [
      "Provided 24/7 enterprise systems monitoring using Splunk, and used PDQ Deploy for patch deployment, responding in real time to service disruptions and supporting incident root cause analysis.",
      "Maintained operational playbooks and documentation to support audit compliance and SLA consistency.",
      "Coordinated with global support teams to meet uptime targets and deliver timely status updates.",
    ],
  },
]

export const skillGroups = [
  {
    title: "Cloud Platforms",
    items: ["AWS Security Hub", "AWS Config", "AWS CloudTrail", "AWS S3", "AWS KMS", "AWS IAM", "AWS Lambda", "EventBridge", "Microsoft Azure (Microsoft Entra ID)"],
  },
  {
    title: "Security and Compliance",
    items: ["NIST 800-53", "ISO 27001", "SOC 2", "PCI DSS", "OPA/Rego", "Conftest", "OSCAL 1.2.1", "compliance-trestle", "Cosign/Sigstore"],
  },
  {
    title: "GRC Frameworks",
    items: ["NIST 800-53 Rev 5", "SOC 2 TSC", "ISO 27001", "PCI DSS", "FFIEC", "GLBA", "FedRAMP/RMF"],
  },
  {
    title: "Tools and Technologies",
    items: ["Tenable.io", "Nessus", "PDQ Deploy", "PDQ Connect", "Splunk", "Microsoft Sentinel", "Chronicle SIEM", "CrowdStrike", "Microsoft Defender", "Proofpoint", "Cisco SEG", "Jira", "GuideCX", "Google Gemini API", "Ollama (local LLMs)"],
  },
  {
    title: "Programming",
    items: ["Python", "boto3", "Bash", "Terraform", "GitHub Actions", "JSON", "YAML", "Flask", "SQLite"],
  },
  {
    title: "Other Skills",
    items: ["AI Risk Assessment", "LLM-assisted Policy Generation", "Prompt Engineering", "Vulnerability Management", "SOC Analysis", "Incident Response", "Threat Hunting", "Detection Tuning", "Patch Automation", "SLA Compliance"],
  },
]

export const resumeSkillRows = [
  { label: "Compliance Automation and Policy-as-Code", items: "OPA/Rego, Conftest, Sigstore/Cosign, OSCAL 1.2.1, compliance-trestle, NIST 800-53, SOC 2" },
  { label: "Infrastructure as Code", items: "Terraform, GitHub Actions, AWS (S3, CloudTrail, KMS, IAM)" },
  { label: "Compliance and Risk Management", items: "Risk register management, remediation tracking, patch compliance tracking, dashboard reporting" },
  { label: "Security Operations", items: "SIEM tuning, phishing, malware, BEC, and DLP investigation, detection engineering, incident response" },
  { label: "Identity and Access", items: "Active Directory, Microsoft Entra ID, provisioning and deprovisioning, MFA resets, and access reviews" },
  { label: "Vulnerability Management", items: "Tenable.io, Nessus, PDQ Deploy, PDQ Connect, CVSS-based prioritization" },
  { label: "Languages and Tools", items: "Python, boto3, Bash, JSON, YAML" },
]

export const certifications = [
  {
    name: "Certified GRC Engineer, Auditor Specialty (CGE-AUD)",
    year: "Issued July 2026, expires July 2027",
    issuer: "GRC Engineering Club",
    credentialId: "cgeaud-3f4e4e28-c2e9-4162-9b6b-48e06b47caaf",
    url: "https://cert.grcengclub.com/verify/cgeaud-3f4e4e28-c2e9-4162-9b6b-48e06b47caaf",
  },
  {
    name: "ISO/IEC 27001:2022 Lead Auditor",
    year: "Issued November 2026, expires November 8, 2029",
    issuer: "Mastermind Assurance",
    credentialId: "zheuvrftfu",
    detail: "Certificate of Competency earned through training and a skills-based exam.",
    url: "https://www.credly.com/badges/65b58dff-8353-4eaa-b75f-98f19e344e36",
  },
  { name: "GRC Jumpstart: GRC Foundations in Cybersecurity", year: "May 2025", issuer: "SimplyCyber" },
  { name: "Practical Security Analyst Assessment (PSAA)", year: "In progress" },
  { name: "ISO/IEC 42001:2023 Lead Auditor", year: "In progress", issuer: "Mastermind Assurance" },
  { name: "Introduction to Hacking Methodology", year: "January 2026", issuer: "Hack Smarter Labs" },
  { name: "Level 1 Cyber Threat Hunting Training", year: "2024" },
  { name: "SOAR Analyst (Siemplify, now Google Cloud)", year: "August 2024" },
  { name: "XM Cyber Exposure Management Certification", year: "April 2024" },
  { name: "Insider Threat Detection (Teramind)", year: "2024" },
  { name: "Chronicle SIEM Fundamentals", year: "August 2023" },
]

export const education = [
  { credential: "Master of Science (MS), Cybersecurity", school: "Maryville University" },
  { credential: "Bachelor of Science (BS), Information Technology, Cum Laude, University of Arkansas Grantham" },
]

export const currentlyBuilding = [
  "CGE-P (Practitioner): Certified GRC Engineer Practitioner course, In Progress",
  "ISO/IEC 42001:2023 Lead Auditor, Mastermind Assurance, in progress",
  "Project 11: Audit Readiness Pipeline, Chapter 9 of the GRC Engineering curriculum",
]

export const resumeSummary = [
  "Certified GRC Engineer, Auditor Specialty (CGE-AUD), with 8+ years in IT and security. That includes a SOC analyst role at Bank OZK, a bank that followed SOC 2, a state IT security role at the Arkansas Department of Public Safety, and MSSP work at Legato Security. Before security, I spent 11 years at Arkansas Children's Hospital, including biomedical equipment work. I hold an ISO/IEC 27001:2022 Lead Auditor Certificate of Competency, earned through training and a skills-based exam.",
  "In my own AWS lab account I completed a ten-project compliance automation curriculum. The work includes a Terraform baseline, OPA/Rego policy tests, a GitHub Actions gate, Cosign-signed evidence, a SOC 2 evidence workbook built from Security Hub and Config, and an OSCAL system security plan for 21 NIST 800-53 controls. The lab account measured 40% AT RISK before controls, 78% NEEDS IMPROVEMENT after the Terraform baseline, and 83% GOOD after the ten projects.",
]

export const resumeProjects = [
  {
    name: "GRC Assurance Engine",
    url: "https://grc-assurance.davidoneal.dev/",
    linkLabel: "Live demo",
    tools: "Python, Flask",
    proof: "The live demo uses synthetic data only. It is an illustrative prototype. The results are not approvals, certifications, or a substitute for a formal risk process.",
    text: "Vendor and AI tool risk reviews with a tamper-evident decision trail. A person records the decision, and the event log keeps a SHA-256 hash chain so a later change to that record is visible.",
  },
  {
    name: "GRC Engineering Pipeline",
    url: "https://github.com/doneal78/grc-engineering-pipeline",
    tools: "Terraform, OPA/Rego, Conftest, GitHub Actions, Cosign, Sigstore, AWS (S3, CloudTrail, KMS, IAM) in my own lab account, Python, OSCAL, compliance-trestle",
    proof: "6/6 policy tests passing. A merged compliant pull request and a deliberately blocked regression pull request are in the commit history.",
    text: "Built an evidence-first CI/CD pipeline enforcing NIST 800-53 controls (SC-28, AC-3, CM-6, AU-3) on AWS S3 in my own lab account. Terraform defines the infrastructure. Six Rego policies via OPA/Conftest test the plan before deployment. GitHub Actions blocks non-compliant pull requests with branch protection. Cosign performs keyless signing of evidence artifacts with a Sigstore chain of custody. OSCAL 1.2.1 component definitions map every control to its evidence and validate with compliance-trestle.",
  },
  {
    name: "Compliance Automation Lab",
    url: "https://github.com/doneal78/grc-compliance-checker",
    tools: "Python, boto3, Terraform, AWS S3, AWS IAM, AWS Security Hub",
    proof: "Terraform baseline stage: 40% AT RISK to 78% NEEDS IMPROVEMENT in my own AWS lab account. The gap at 78% was one intentionally misconfigured test bucket and a physical MFA device pending setup on the lab IAM user, documented in the notes. After the ten projects, the same account measured 83% GOOD.",
    text: "Built an AWS S3 and IAM configuration scanner using Python and boto3 against a Terraform baseline in my own lab account, producing a before and after compliance score with root-cause detail on every failure.",
  },
]

export const resumeJobs = [
  experience[0],
  experience[1],
  experience[2],
  experience[3],
  experience[4],
  {
    title: "System Operations Analyst I",
    company: "FIS Global",
    period: "June 2017 to October 2021",
    bullets: [
      "Provided 24/7 enterprise systems monitoring using Splunk, and used PDQ Deploy for patch deployment, responding in real time to service disruptions and supporting incident root cause analysis.",
      "Maintained operational playbooks and documentation to support audit compliance and SLA consistency.",
      "Coordinated with global support teams.",
    ],
  },
]

export const pages = {
  home: {
    title: "David O'Neal | GRC Analyst and GRC Engineer",
    description:
      "David O'Neal builds governance and controls that hold up in an audit. GRC analyst and engineer in Arkansas. Live demo, compliance pipeline, and a NIST 800-53 OSCAL plan. Email onealdavide@gmail.com.",
    path: "/",
  },
  labs: {
    title: "More labs | David O'Neal",
    description:
      "Projects, proof, and experience from David O'Neal. Ten compliance builds in his own AWS lab account: 40% AT RISK, then 78% NEEDS IMPROVEMENT after the Terraform baseline, then 83% GOOD after ten projects.",
    path: "/labs",
  },
  resume: {
    title: "Resume | David O'Neal",
    description:
      "Resume for David O'Neal, GRC analyst and GRC engineer. CGE-AUD. Bank OZK, the Arkansas Department of Public Safety, an MSSP, and independent compliance automation in his own AWS lab account.",
    path: "/resume",
  },
  notFound: {
    title: "Page not found | David O'Neal",
    description:
      "That page is not on David O'Neal's site. The homepage, labs, and resume are linked here, along with onealdavide@gmail.com.",
    path: "/404",
  },
}
