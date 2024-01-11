"use client";
import Image from "next/image";
import Link from "next/link";

export const Contact = () => {

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl uppercase mb-5">Contact</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 border-2 border-first-basic rounded-lg p-5">
        <form
          action={`https://formsubmit.co/joamsmg@gmail.com`}
          method="POST"
          className="flex flex-col justify-center items-center gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="p-2 text-center text-black outline-none rounded-md w-full"
            required
          />
          <input type="hidden" name="_subject" value="New contact!" />
          <input type="hidden" name="_captcha" value="false"></input>

          <input
            type="text"
            name="email"
            placeholder="email"
            className="p-2 text-center text-black outline-none rounded-md w-full"
            required
          />

          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="message"
            className="p-2 text-center text-black outline-none rounded-md resize-none"
            required
          ></textarea>

          <button
            type="submit"
            id="message"
            className="uppercase font-semibold border-2 border-first-basic p-2 rounded hover:bg-first-dark hover:text-first-basic transition-all duration-200"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-row gap-5 items-center">
            <Image
              src="/images/icons/location.png"
              alt="location"
              width={30}
              height={30}
            />
            <span>Bolivia - Tarija</span>
          </div>
          <div className="w-full flex flex-row gap-5 items-center">
            <Image
              src="/images/icons/telephone.png"
              alt="phone"
              width={30}
              height={30}
            />
            <span>+591 78708780</span>
          </div>
          <div className="w-full flex flex-row gap-5 items-center">
            <Image
              src="/images/icons/email.png"
              alt="email"
              width={30}
              height={30}
            />
            <span>joamsmg@gmail.com</span>
          </div>
          <hr />
          <div className="w-full flex flex-row items-center justify-center gap-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/joams-mogro-gomez-442691103/"
            >
              <Image
                src="/images/icons/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
            <Link target="_blank" href="https://github.com/jom3">
              <Image
                src="/images/icons/github.png"
                alt="github"
                width={30}
                height={30}
              />
            </Link>
          </div>
          <hr />
          <div className="w-full flex flex-row gap-2 items-center justify-center">
            <Image
              src="/images/icons/copyright.png"
              alt="email"
              width={10}
              height={10}
            />
            <span>Derechos reservados</span>
          </div>
        </div>
      </div>
    </div>
  );
};
