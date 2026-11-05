import Layout from '../components/Layout.jsx'
import {
  certifications,
  education,
  profile,
  resumeJobs,
  resumeProjects,
  resumeSkillRows,
  resumeSummary,
} from '../data/site.js'

const resumeCerts = [
  certifications.find((cert) => cert.name.startsWith('Certified GRC Engineer')),
  certifications.find((cert) => cert.name === 'ISO 27001 Lead Auditor'),
  certifications.find((cert) => cert.name.startsWith('GRC Jumpstart')),
  certifications.find((cert) => cert.name.startsWith('VMDR')),
]

export default function ResumePage() {
  return (
    <Layout>
      <article className="wrap resume">
        <header className="resume-top">
          <div>
            <h1>{profile.name}</h1>
            <p className="creds">MS, Cybersecurity · Certified GRC Engineer, Auditor Specialty (CGE-AUD) · ISO 27001 Lead Auditor (in progress)</p>
          </div>
          <a className="btn btn-primary" href={profile.resumePdf} download>Download PDF</a>
        </header>
        <ul className="resume-meta">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a href={profile.linkedin}>linkedin.com/in/david-oneal</a></li>
          <li><a href={profile.github}>github.com/doneal78</a></li>
          <li><a href={profile.site}>davidoneal.dev</a></li>
          <li><a href={profile.labs}>labs.davidoneal.dev</a></li>
        </ul>

        <section>
          <h2>Executive summary</h2>
          {resumeSummary.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          {resumeProjects.map((project) => (
            <div key={project.name} className="resume-project">
              <h3>
                {project.name} <a href={project.url}>GitHub</a>
              </h3>
              <p>{project.text}</p>
              <p><strong>Tools: </strong>{project.tools}</p>
              <p className="proof-line">{project.proof}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          {resumeJobs.map((job) => (
            <div key={job.title + job.period} className="job">
              <header className="job-head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <p className="period">{job.period}</p>
              </header>
              <ul className="clean">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.note ? <p className="note">{job.note}</p> : null}
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          {resumeSkillRows.map((row) => (
            <p key={row.label} className="skill-row">
              <strong>{row.label}</strong>
              <span>{row.items}</span>
            </p>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((item) => (
            <p key={item.credential} className="edu">
              <strong>{item.credential}</strong>
              <span>{item.school}</span>
            </p>
          ))}
        </section>

        <section>
          <h2>Certifications</h2>
          <ul className="cert-list">
            {resumeCerts.map((cert) => (
              <li key={cert.name}>
                <span>
                  <strong>{cert.name}</strong>
                  {cert.issuer ? <span className="issuer"> {cert.issuer}</span> : null}
                </span>
                <span className="year">
                  {cert.year}
                  {cert.url ? <> · <a href={cert.url}>Verify</a></> : null}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <p className="fine">
          <a href={profile.resumePdf} download>Download the PDF</a>
          <span> · </span>
          <a href="/">Back to the portfolio</a>
        </p>
      </article>
    </Layout>
  )
}
