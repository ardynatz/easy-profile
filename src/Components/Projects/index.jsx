import { AiOutlineGithub } from "react-icons/ai";
import { projects } from "../../Data/config";

export default function Project() {
  return (
    <section className="mx-auto max-w-2xl px-2 py-4" id="projects">
      <h1 className="text-center mb-4 text-2xl font-bold dark:text-stone-300">
        {projects.title}
      </h1>
      <div className="py-4 justify-items-center grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.data.map((project) => (
          <div key={project.title} className="projects-card">
            <div className="md:flex">
              <div className="p-8">
                <div className="tracking-wide text-lg text-black dark:text-stone-300 font-bold">
                  {project.title}
                </div>
                <p className="my-2 p-desc">
                  Ipsum laboris excepteur non pariatur nisi officia ut in non
                  aliquip reprehenderit deserunt.
                </p>
                <div className="grid gap-2 grid-flow-col pt-2 items-center justify-start">
                  {project.tag.map((item) => (
                    <span key={item} className="projects-badge">
                      {item}
                    </span>
                  ))}
                  <a
                    href={project.github}
                    className="text-xl rounded-xl dark:shadow-white shadow"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
