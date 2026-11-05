import Layout from '../components/Layout.jsx'
import {
  aboutLong,
  certifications,
  currentlyBuilding,
  education,
  experience,
  posture,
  profile,
  projects,
  proof,
  skillGroups,
  stats,
} from '../data/site.js'

export default function LabsPage() {
  return (
    <Layout>
      <div className="wrap page-body">
        <div className="intro-row">
          <img className="portrait" src="/Profile.png" alt="David O'Neal" width="96" height="96" />
          <div>
            <p className="kicker">Labs</p>
            <h1>More labs</h1>
            <p className="lede">
              The homepage shows three projects. Everything else is here: the full writeups, the posture scores by stage, proof links, experience, skills, and certifications.
            </p>
          </div>
        </div>

        <aside className="callout">
          <p>
            The public build log is <a href={profile.labs}>OracleRecon labs</a> at labs.davidoneal.dev. AWS resources in these projects run in my own lab account. That account is personal portfolio work.
          </p>
        </aside>

        <nav className="jump" aria-label="On this page">
          <a href="#posture">Posture</a>
          <a href="#all-projects">Projects</a>
          <a href="#proof">Proof</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#now">Currently building</a>
        </nav>

        <section className="block" aria-labelledby="story-heading">
          <h2 id="story-heading" className="kicker">About the work</h2>
          {aboutLong.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="prose">{paragraph}</p>
          ))}
        </section>

        <section id="posture" className="block" aria-labelledby="posture-heading">
          <h2 id="posture-heading" className="kicker">Compliance posture</h2>
          <p className="lede">{posture.intro}</p>
          <div className="grid-3">
            {posture.steps.map((step) => (
              <article key={step.status} className={`card stage stage-${step.score.replace('%', '')}`}>
                <p className="score">{step.score}</p>
                <p className="status">{step.status}</p>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
          <ul className="stat-row">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="all-projects" className="block" aria-labelledby="all-projects-heading">
          <h2 id="all-projects-heading" className="kicker">Projects</h2>
          <p className="lede">Three flagship builds are first. The rest of the curriculum follows.</p>
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="project">
              <h3>
                {project.name}
                {project.flagship ? <span className="pill">Flagship</span> : null}
              </h3>
              <p>{project.description}</p>
              {project.auditor ? (
                <p className="auditor"><span>Auditor gets:</span> {project.auditor}</p>
              ) : null}
              <ul className="clean">
                {project.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p className="link-row">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </p>
            </article>
          ))}
        </section>

        <section id="proof" className="block" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className="kicker">Proof of work</h2>
          <p className="lede">Every claim above links to something you can open. These six are the shortest path.</p>
          <div className="grid-3">
            {proof.map((item) => (
              <a key={item.tag} className="card proof" href={item.url}>
                <span className="tag-label">{item.tag}</span>
                <span>{item.label}</span>
                <span className="card-link">View on GitHub</span>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="block" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="kicker">Experience</h2>
          {experience.map((job) => (
            <article key={job.title + job.period} className="job">
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
            </article>
          ))}
        </section>

        <section id="skills" className="block" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="kicker">Skills</h2>
          <div className="grid-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="card">
                <h3>{group.title}</h3>
                <ul className="clean">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="block" aria-labelledby="certs-heading">
          <h2 id="certs-heading" className="kicker">Certifications</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
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

        <section id="education" className="block" aria-labelledby="education-heading">
          <h2 id="education-heading" className="kicker">Education</h2>
          {education.map((item) => (
            <p key={item.credential} className="edu">
              <strong>{item.credential}</strong>
              <span>{item.school}</span>
            </p>
          ))}
        </section>

        <section id="now" className="block" aria-labelledby="now-heading">
          <h2 id="now-heading" className="kicker">Currently building</h2>
          <ul className="clean">
            {currentlyBuilding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
