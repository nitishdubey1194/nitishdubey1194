import { MdKeyboardArrowDown } from "react-icons/md";
import SkillsPage from "./components/Skills";
import Header from "./components/Header";
import ProjectsPage from "./components/Projects";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-r from-[#020617] via-[#0a2540] to-[#020617] text-center pt-10">
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <Header />
        <a
          href="#skills"
          className="absolute bottom-10 animate-bounce text-white text-4xl"
        >
          <MdKeyboardArrowDown />
        </a>
      </section>
      <section className="w-full mt-24" id="skills">
        <SkillsPage />
      </section>
      <section className="w-full mt-24 px-6" id="projects">
        <ProjectsPage />
      </section>
      <footer className="w-full bg-[#0a2540] py-6 mt-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Nitish Dubey
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href="https://github.com/nitishdubey1194"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://in.linkedin.com/in/nitishdubey1194"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nitishdubey1194@gmail.com"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Email
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}
