export default function Home() {

  const projects = [
    {
      title: "Allergy Prediction AI",
      desc: "Machine learning model predicting allergy triggers from symptoms.",
      tech: "Python • ML • API"
    },
    {
      title: "AI Chatbot",
      desc: "Local LLM chatbot using Ollama and API integration.",
      tech: "LLM • Node.js • AI"
    },
    {
      title: "Product Recommendation AI",
      desc: "Recommendation system using collaborative filtering.",
      tech: "ML • Data Science"
    }
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "LLM",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Data Analysis"
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Nitish Dubey
        </h1>

        <p className="text-xl text-gray-400">
          AI / ML Developer • Full Stack Engineer
        </p>

        <p className="mt-4 text-gray-500">
          Building intelligent systems, automation tools, and AI-powered applications.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI & Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span
              key={skill}
              className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map(project => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-3">
                {project.desc}
              </p>

              <span className="text-sm text-gray-500">
                {project.tech}
              </span>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">
          Connect
        </h2>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://github.com/nitishdubey1194">GitHub</a>
          <a href="https://in.linkedin.com/in/nitishdubey1194">LinkedIn</a>
          <a href="mailto: nitishdubey1194@gmail.com">Email</a>
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-20">
        © {new Date().getFullYear()} Nitish Dubey
      </footer>

    </main>
  )
}
