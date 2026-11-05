import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/#projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { pathname, hash } = useLocation();

  // Scrollen naar #projects wanneer de URL verandert
  useEffect(() => {
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);

  function handleClick(to) {
    // Menu sluiten op mobiel
    const menu = document.getElementById("menu");
    if (menu.matches(":popover-open")) menu.hidePopover();

    // Ook scrollen als je nogmaals op dezelfde link klikt
    const [, id] = to.split("#");
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function getClassName(to) {
    const [path, id = ""] = to.split("#");
    const isActive = pathname === path && hash === (id ? `#${id}` : "");
    return isActive ? "active" : "";
  }

  return (
    <header>
      <nav>
        <button popoverTarget="menu">Menu</button>

        <ul id="menu" popover="auto">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={() => getClassName(link.to)}
                onClick={() => handleClick(link.to)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
