import { getProjects } from "@/helpers";
import { ProjectCard } from "..";
import Link from "next/link";

export const Project = () => {
  const projects = getProjects()
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center p-10 gap-5"
    >
      <h1 className="text-4xl uppercase mt-10">Projects</h1>
      <div className="w-full h-full flex flex-row flex-wrap justify-between gap-5">
        {
          projects.map(item=>(
            <ProjectCard key={item.title} {...item}/>
          ))
        }
      </div>
      <Link href="https://github.com/jom3" target="_blank" className="border-2 border-first-basic text-white font-semibold p-2 rounded-lg hover:border-white hover:text-first-dark hover:bg-first-basic">See More</Link>
    </section>
  );
};
