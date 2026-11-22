import './Footer.css'

export default function Footer() {
	return (
		<footer className="site-footer">
			<a href="/contact">
				<span data-reveal="mask">
					<span>Neem</span>
				</span>{' '}
				<span data-reveal="mask" style={{ '--delay': '0.1s' }}>
					<span>contact op</span>
				</span>
			</a>
		</footer>
	)
}
