import "./Projects.css"

export default function Projects() {

  const projects = [
  {
    slug: "https://hvana.netlify.app/",
    title: "Hvana",
    description: "Barometer opdracht hvana",
    image: "/hvana.jpg",
  },
  {
    slug: "https://proof-of-concept-qs99.onrender.com/",
    title: "Tweakers",
    description: "Community manager dashboard.",
    image: "/tweakers.jpg",
  },
  {
    slug: "",
    title: "Binnenkort beschikbaar",
    description: "",
    image: "/question.jpg",
  },
];
  return (
<section className="projects">
    <header>
      <h1>Projecten</h1>
    </header>
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>
          <img src={project.image} alt={project.title} width="1200" height="900" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <footer>
            <a href={`${project.slug}`}>Bekijk project →</a>
          </footer>
        </li>
      ))}
    </ul>
  </section>
);
}