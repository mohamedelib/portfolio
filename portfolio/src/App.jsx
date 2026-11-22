import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App({ path }) {
	const isContactPage = path === '/contact'

	useReveal()

	return (
		<>
			<Header path={path} />
			<main>
				{isContactPage ? (
					<Contact />
				) : (
					<>
						<Hero />
						<Projects />
					</>
				)}
			</main>
			{!isContactPage && <Footer />}
		</>
	)
}
