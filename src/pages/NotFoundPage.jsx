import Layout from '../components/Layout.jsx'
import { profile } from '../data/site.js'

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="wrap page-body">
        <p className="kicker">404</p>
        <h1>That page is not on this site</h1>
        <p className="lede">
          The work is on the homepage, the labs page, and the resume. Email is {profile.email}.
        </p>
        <p className="link-row">
          <a href="/">Home</a>
          <a href="/labs">More labs</a>
          <a href="/resume">Resume</a>
          <a href={profile.demo}>Live demo</a>
        </p>
      </div>
    </Layout>
  )
}
