import { Link, NavLink } from "react-router";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header>
      <Link to="/">Mohamed</Link>

      <nav>
        <button popoverTarget="menu">Menu</button>

        <ul id="menu" popover="auto">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
