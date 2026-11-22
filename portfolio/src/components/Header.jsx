import './Header.css'

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
]

export default function Header({ path }) {
	return (
		<header className="site-header">
			<nav data-reveal="up" data-reveal-load style={{ '--delay': '0.6s' }}>
				<button type="button" popoverTarget="menu">
					Menu
				</button>

				<ul id="menu" popover="auto">
					{links.map(({ href, label }) => (
						<li key={href}>
							<a
								href={href}
								aria-current={href === path ? 'page' : undefined}
								onClick={closeMenu}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

// Progressive enhancement: sluit het mobiele menu na een klik op een link
function closeMenu(event) {
	const menu = event.currentTarget.closest('[popover]')

	if (menu?.hidePopover && menu.matches(':popover-open')) {
		menu.hidePopover()
	}
}
