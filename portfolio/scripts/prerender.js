import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

const distUrl = new URL('../dist/', import.meta.url)
const serverBuildUrl = new URL('../dist-ssr', import.meta.url)
const template = await readFile(new URL('index.html', distUrl), 'utf8')
const pages = [
	{ path: '/', file: 'index.html' },
	{ path: '/contact', file: 'contact/index.html', title: 'Contact' },
]

// Per pagina de vooraf gerenderde HTML in een eigen index.html zetten
for (const { path, file, title } of pages) {
	const fileUrl = new URL(file, distUrl)
	const html = template
		.replace('<!--app-html-->', render(path))
		.replace(/<title>(.*)<\/title>/, (tag, name) =>
			title ? `<title>${title} | ${name}</title>` : tag,
		)

	await mkdir(new URL('.', fileUrl), { recursive: true })
	await writeFile(fileUrl, html)
}

await rm(serverBuildUrl, { recursive: true })
