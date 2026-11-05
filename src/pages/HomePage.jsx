import Layout from '../components/Layout.jsx'
import { aboutShort, featured, profile, whatIDo } from '../data/site.js'

export default function HomePage() {
  return (
    <Layout>
      <div className="wrap hero">
        <p className="badge">{profile.badge}</p>
        <h1 className="headline">
          Building <span className="grad">Governance & Controls</span>
          <span className="break"> </span>
          that hold up in an audit
        </h1>
        <p className="subline">{profile.subline}</p>
        <div className="actions">
          <a className="btn btn-primary" href={profile.demo}>Try the live demo</a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Email me</a>
        </div>

        <section className="block" aria-labelledby="what-heading">
          <h2 id="what-heading" className="kicker">What I do</h2>
          <div className="grid-3">
            {whatIDo.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="block" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="kicker">Featured projects</h2>
          <div className="grid-3">
            {featured.map((item) => (
              <article key={item.name} className="card">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <p className="auditor"><span>Auditor gets:</span> {item.auditor}</p>
                <a className="card-link" href={item.href}>{item.label}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="block" aria-labelledby="about-heading">
          <h2 id="about-heading" className="kicker">About</h2>
          <p className="about">{aboutShort}</p>
          <p className="more">
            <a href="/labs">More labs &gt;</a>
          </p>
        </section>
      </div>
    </Layout>
  )
}
