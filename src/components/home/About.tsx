import Link from "next/link"
import { DisplayImage } from "../shared/DisplayImage"

export const About = () => {

  return (
    <section id="about" className="w-full min-h-screen sm:max-w-[700px] rounded-lg flex justify-center items-center flex-col sm:flex-row p-0 sm:p-5 gap-5 mt-10">
      <DisplayImage imageUrl={"/profile.jpg"} imageAlt={"profile"} width={300} height={300} classes={'rounded-full shadow-white drop-shadow-2xl w-auto h-auto'} />
      <div>
      <p className="text-center sm:text-right text-first-complementary text-xl">Hello, my name is<span className="text-first-primary"> Joams Mogro Gomez, </span>I am a Full-Stack Developer</p>
      <br />
      <p className="text-first-complementary text-center p-5">I have a different set of skills with differents frameworks of <span className="text-first-primary">JavaScript</span> and <span className="text-first-primary">TypeScript</span>.</p>
      <p className="text-center mt-5 underline underline-offset-4 font-semibold text-white uppercase">check my CV</p>
      <div className="w-full flex flex-row justify-center items-center gap-10 my-5">
      <Link href="/pdf/CV-ES-Joams-Mogro-Gomez.pdf" target="_blank" className="w-10 h-10 rounded-full bg-first-basic text-first-dark hover:bg-first-dark hover:text-first-basic hover:border-2 hover:border-first-basic transition-all duration-200 flex justify-center items-center">ES</Link>
      <Link href="/pdf/CV-EN-Joams-Mogro-Gomez.pdf" target="_blank" className="w-10 h-10 rounded-full bg-first-basic text-first-dark hover:bg-first-dark hover:text-first-basic hover:border-2 hover:border-first-basic transition-all duration-200 flex justify-center items-center">EN</Link>
      </div>
      </div>
      </section>
  )
}
