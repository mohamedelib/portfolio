import { useEffect } from 'react'

// Progressive enhancement: zet .is-visible op elk [data-reveal]-element zodra
// het in beeld komt. Zonder JavaScript is alles direct zichtbaar (zie reveal.css).
// - [data-reveal-load]: animeert altijd direct bij het laden (de hero)
// - data-reveal="image": is verborgen volledig weggeknipt, dus we kijken naar
//   het ouder-element om te bepalen of het in beeld is
export default function useReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll('[data-reveal]')
		const targetsByTrigger = new Map()
		const loadElements = []
		const observer = new IntersectionObserver(handleIntersect, {
			rootMargin: '0px 0px -10% 0px',
		})
		let frame

		elements.forEach((element) => {
			if (element.hasAttribute('data-reveal-load')) {
				loadElements.push(element)
				return
			}

			const trigger =
				element.dataset.reveal === 'image' ? element.parentElement : element
			const targets = targetsByTrigger.get(trigger) ?? []

			targetsByTrigger.set(trigger, [...targets, element])
			observer.observe(trigger)
		})

		// Twee frames wachten zodat de verborgen begintoestand eerst getekend is
		frame = requestAnimationFrame(() => {
			frame = requestAnimationFrame(() => loadElements.forEach(show))
		})

		return () => {
			cancelAnimationFrame(frame)
			observer.disconnect()
		}

		function handleIntersect(entries) {
			entries
				.filter(({ isIntersecting }) => isIntersecting)
				.forEach(({ target }) => {
					targetsByTrigger.get(target).forEach(show)
					observer.unobserve(target) // één keer afspelen
				})
		}

		function show(element) {
			element.classList.add('is-visible')
		}
	}, [])
}
