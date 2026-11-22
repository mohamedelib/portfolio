import './Projects.css'

const projects = [
	{
		url: 'https://hvana.netlify.app/',
		title: 'Hvana',
		description: 'Barometer opdracht hvana',
		image: {
			name: 'hvana',
			alt: 'Logo van Hvana: voor en door de HvA',
			width: 1240,
			height: 260,
		},
		background: 'hsl(219 95% 45%)',
		tags: ['[Sveltekit]', '[2026]'],
	},
	{
		url: 'https://proof-of-concept-qs99.onrender.com/',
		title: 'Tweakers',
		description: 'Community manager dashboard.',
		image: {
			name: 'tweakers',
			alt: 'Logo van Tweakers',
			width: 1280,
			height: 432,
		},
		background: 'hsl(346 74% 36%)',
		tags: ['[Liquid]', '[2026]'],
	},
	{
		title: 'Binnenkort beschikbaar',
		image: {
			name: 'question',
			alt: 'Wit vraagteken',
			width: 360,
			height: 360,
		},
	},
]

export default function Projects() {
	return (
		<section id="projects" className="projects">
			<h2 data-reveal="mask">
				<span>Projecten</span>
			</h2>

			<ul>
				{projects.map(
					({ url, title, description, image, background, tags }) => (
						<li key={title} style={{ '--image-background': background }}>
							<picture data-reveal="image">
								<source srcSet={`/${image.name}.avif`} type="image/avif" />
								<img
									src={`/${image.name}.jpg`}
									alt={image.alt}
									width={image.width}
									height={image.height}
									loading="lazy"
									decoding="async"
								/>
							</picture>

							<h3 data-reveal="mask" style={{ '--delay': '0.15s' }}>
								<span>{title}</span>
							</h3>

							{description && (
								<p data-reveal="up" style={{ '--delay': '0.25s' }}>
									{description}
								</p>
							)}

							{tags && (
								<ul data-reveal="up" style={{ '--delay': '0.35s' }}>
									{tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							)}

							{url && (
								<a href={url} data-reveal="up" style={{ '--delay': '0.45s' }}>
									Bekijk project
								</a>
							)}
						</li>
					),
				)}
			</ul>
		</section>
	)
}
