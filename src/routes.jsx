import HomePage from './pages/HomePage.jsx'
import LabsPage from './pages/LabsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const routes = {
  '/': HomePage,
  '/labs': LabsPage,
  '/resume': ResumePage,
}

function pageForPath(pathname) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/'
  return routes[path] || null
}

export function PageForPath({ pathname }) {
  const Page = pageForPath(pathname) || NotFoundPage
  return <Page />
}
