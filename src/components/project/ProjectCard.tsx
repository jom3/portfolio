import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({img,link,techs,title}:Project) => {
  return (
    <div key={title} className="border-2 w-full border-first-basic rounded-t-xl sm:w-[500px] h-[400px] flex items-center flex-col relative p-2">
    <div className="w-full flex flex-row justify-between items-center p-2">
      <h3 className="font-semibold underline underline-offset-2 uppercase text-center">{title}</h3>
      <Link href={link} className={`border-2 border-first-basic p-2 rounded-lg`} target="_blank">Code</Link>
    </div>
    <div  className="w-full flex flex-row gap-2">
    {
      techs.map(tec=>(
        <Image key={tec} src={`/images/logos/${tec}.png`} alt={tec} width={30} height={30} className="object-contain w-auto h-auto"/>
        ))
      }
      </div>
    <Image src={`/images/${img}`} alt={img} width={500} height={500} className="p-2 h-[280px] absolute bottom-0 object-cover sm:object-contain"/>
  </div>
  )
}
