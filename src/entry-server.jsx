import { renderToString } from 'react-dom/server'
import { PageForPath } from './routes.jsx'

export function render(url) {
  const pathname = new URL(url, 'https://davidoneal.dev').pathname
  return renderToString(<PageForPath pathname={pathname} />)
}
