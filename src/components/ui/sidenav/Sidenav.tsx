import Link from "next/link";

export const Sidenav = () => {
  return (
    <div className="fixed top-20 bg-first-basic flex justify-center items-center flex-col gap-5 p-5 z-30">
      <Link
        href="#about"
        className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
      >
        About
      </Link>
      <Link
        href="#tech"
        className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
      >
        Technologies
      </Link>
      <Link
        href="#projects"
        className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
      >
        Projects
      </Link>
      <Link
        href="#contact"
        className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
      >
        Contact
      </Link>
    </div>
  );
};
