import { hydrateRoot } from 'react-dom/client'
import { PageForPath } from './routes.jsx'
import './index.css'

const root = document.getElementById('root')
hydrateRoot(root, <PageForPath pathname={window.location.pathname} />)
