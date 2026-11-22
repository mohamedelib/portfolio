import './Hero.css'

export default function Hero() {
	return (
		<section className="hero">
			<hgroup>
				<h1>
					<span data-reveal="mask" data-reveal-load>
						<span>Mohamed</span>
					</span>{' '}
					<span
						data-reveal="mask"
						data-reveal-load
						style={{ '--delay': '0.12s' }}
					>
						<span>El Ibrahymy</span>
					</span>
					{/* Decoratieve lijn door de naam heen */}
					<svg viewBox="-30 -100 760 360" aria-hidden="true">
						<path
							d="M60 -90C70 -30 200 0 300 50C360 80 250 110 120 115C0 120 -25 186 60 188L560 188C640 188 690 150 650 125C610 100 580 160 620 185C650 205 630 230 640 250"
							pathLength="1"
						/>
					</svg>
				</h1>
				<p data-reveal="up" data-reveal-load style={{ '--delay': '0.45s' }}>
					Ik bouw snelle, toegankelijke websites voor kleine bedrijven en
					bureaus.
				</p>
			</hgroup>
		</section>
	)
}
