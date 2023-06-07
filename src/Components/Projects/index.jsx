import { GoMarkGithub } from "react-icons/go";
import { HiExternalLink } from "react-icons/hi";
import { projectsConfig as projects } from "../../Data/config";

export default function Project() {
  return (
    <section className="mx-auto md:max-w-3xl px-2 py-2" id="projects">
      <h1 className="text-center mb-4 text-2xl font-bold dark:text-stone-300">
        {projects.title}
      </h1>
      <div className="py-4 justify-items-center grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.data.map((project) => (
          <div
            key={project.title}
            className="projects-card w-80 max-w-3xl md:w-96 md:max-w-96"
          >
            <div className="md:flex">
              <div className="p-8">
                <div className="tracking-wide text-lg text-left text-black dark:text-stone-300 font-bold">
                  <a className="flex flex-row" href={project.link} target="_blank">
                    {project.title} &nbsp;<HiExternalLink size={24} />
                  </a>
                </div>
                <p className="my-2 p-desc text-left">{project.desc}</p>
                <div className="flex flex-row items-center pt-2">
                  {project.tag.map((item) => (
                    <span key={item} className="projects-badge mr-2">
                      {item}
                    </span>
                  ))}
                  <div className="rounded-xl dark:shadow-white/50 shadow">
                    <a
                      target="_blank"
                      href={project.github}
                      className="text-xl"
                    >
                      <GoMarkGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
