import { profile, featured } from '../data/site.js'

const nav = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/labs', label: 'Labs' },
  { href: '/#contact', label: 'Contact' },
]

export default function Layout({ children }) {
  return (
    <div className="page">
      <a className="skip" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="/">{profile.name}</a>
          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </header>
      <main id="content">{children}</main>
      <section id="contact" className="wrap contact">
        <p className="kicker">Contact</p>
        <h2>Email me</h2>
        <p className="lede">
          Open to remote GRC roles and 1099 healthcare GRC consulting.
        </p>
        <p className="contact-mail">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <span className="dot"> · </span>
          {profile.location}
        </p>
        <ul className="contact-links">
          <li><a href="/resume">View resume</a></li>
          <li><a href={profile.resumePdf} download>Download resume PDF</a></li>
          <li><a href={profile.linkedin}>LinkedIn</a></li>
          <li><a href={profile.github}>GitHub</a></li>
          <li><a href={profile.gitlab}>GitLab</a></li>
          <li><a href={profile.labs}>OracleRecon labs</a></li>
          <li>
            <a href={profile.grcClub}>
              <img src="/grc-club.png" alt="" width="16" height="16" />
              GRC Engineering Club
            </a>
          </li>
        </ul>
      </section>
      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-headline">{profile.headline}</p>
          <ul className="footer-links">
            {featured.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
            <li><a href="/labs">More labs</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
          <p className="fine">© 2026 {profile.name}</p>
        </div>
      </footer>
    </div>
  )
}
