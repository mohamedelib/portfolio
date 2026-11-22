import { renderToString } from 'react-dom/server'
import App from './App'

// Rendert een pagina naar HTML tijdens de build, zodat hij ook zonder JavaScript werkt
export const render = (path) => renderToString(<App path={path} />)
