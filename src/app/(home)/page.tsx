import { About, Contact, Project, Tech } from "@/components";

export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center p-10">
        <About />
        <Tech />
        <Project />
        <Contact />
    </main>
  );
}
