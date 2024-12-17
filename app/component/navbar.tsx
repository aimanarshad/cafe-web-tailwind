import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="h-[70px] bg-black text-white gird grid-cols-4 md:grid-cols-4 ">
        <ul className="flex flex-row justify-evenly w-full   text-center ">
          <Link className="mt-4 text-4xl"href="/"> Home</Link>

          <Link className="mt-4 text-4xl" href="/aboutUs">AboutUs</Link>
          <Link className="mt-4 text-4xl" href="/menu">Menu</Link>
          <Link className="mt-4 text-4xl" href="/where">Where</Link>
          <Link className="mt-4 text-4xl" href="/contactUS">ContactUs</Link>
        </ul>
      </nav>
    </>
  );
}
