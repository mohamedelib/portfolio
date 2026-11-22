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
				</h1>
				<p data-reveal="up" data-reveal-load style={{ '--delay': '0.45s' }}>
					Ik bouw snelle, toegankelijke websites voor kleine bedrijven en
					bureaus.
				</p>
			</hgroup>
		</section>
	)
}
