import { Navbar } from "@/components";

export const metadata = {
 title: 'Home page',
 description: "Welcome to Joams Mogro's portfolio",
};
export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  );
}