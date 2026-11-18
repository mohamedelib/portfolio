import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      slug: "https://hvana.netlify.app/",
      title: "Hvana",
      description: "Barometer opdracht hvana",
      image: "/hvana.jpg",
      tags: ["[Sveltekit]", "[2026]"],
    },
    {
      slug: "https://proof-of-concept-qs99.onrender.com/",
      title: "Tweakers",
      description: "Community manager dashboard.",
      image: "/tweakers.jpg",
      tags: ["[Liquid]", "[2026]"],
    },
    {
      slug: "",
      title: "Binnenkort beschikbaar",
      description: "",
      image: "/question.jpg",
    },
  ];

  return (
    <section className="projects" aria-labelledby="projects">
      <header>
        <h2 id="projects">Projecten</h2>
      </header>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              width="1200"
              height="900"
            />
            <h3>{project.title}</h3>
            {project.description && (
              <p className="description">{project.description}</p>
            )}
            {project.tags && (
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            {project.slug && (
              <footer>
                <a href={project.slug}>Bekijk project →</a>
              </footer>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
