import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'

const root = document.getElementById('root')
// '/contact/' en '/contact' zijn dezelfde pagina
const path = location.pathname.replace(/(.)\/$/, '$1')
const app = <App path={path} />

// In de build staat de HTML er al (prerender), dan alleen JavaScript eraan koppelen
if (root.firstElementChild) {
	hydrateRoot(root, app)
} else {
	createRoot(root).render(app)
}
