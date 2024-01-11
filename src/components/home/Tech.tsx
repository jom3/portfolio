import { getTechnologies } from "@/helpers"
import Image from "next/image"

export const Tech = () => {
  const technologies = getTechnologies()
  return (
      <section id="tech" className="w-full min-h-screen flex flex-col justify-end items-center sm:mt-0">
        <h1 className="text-4xl uppercase">Technologies</h1>
        <div className="flex flex-row gap-5 flex-wrap justify-between max-w-[400px] p-5">
          {
            technologies.map(item=>(
              <div key={item.name} className="flex flex-col items-center flex-wrap">
                <span className="uppercase font-semibold text-sm">{item.name}</span>
              <div className="w-20 h-20 bg-first-basic bg-opacity-30 flex justify-center items-center rounded-full">
                <Image src={`/images/logos/${item.img}.png`} alt={item.img} width={40} height={40} className="w-auto h-auto"/>
              </div>
              </div>
            ))
          }
        </div>

      </section>
  )
}
