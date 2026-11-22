import './TechStack.css'

const technologies = [
	{ name: 'SvelteKit', type: 'Framework' },
	{ name: 'Liquid', type: 'Templating' },
	{ name: 'Astro', type: 'Framework' },
	{ name: 'React', type: 'Library' },
	{ name: 'Eleventy', type: 'Static site generator' },
	{ name: 'Nuxt', type: 'Framework' },
	{ name: 'Node.js', type: 'Runtime' },
	{ name: 'Directus', type: 'Headless CMS / API' },
]

export default function TechStack() {
	return (
		<section id="tech-stack" className="tech-stack">
			<h2 data-reveal="mask">
				<span>Techstack</span>
			</h2>

			<ul>
				{technologies.map(({ name, type }, index) => (
					<li
						key={name}
						data-reveal="up"
						style={{ '--delay': `${index * 0.08}s` }}
					>
						{name} <small>[{type}]</small>
					</li>
				))}
			</ul>
		</section>
	)
}
