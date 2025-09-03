import type { Metadata } from "next";
import { Alata, Raleway, Cherish } from "next/font/google";

import Menu from "./Menu";
import Header from "./Header";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="justify-between flex flex-row items-center text-white pb-3"> {/* header */}
        <div className="justify-start">
          <h1 className={`alata text-moon-yellow text-[48px]`}>AILUN SHI</h1>
        </div>

        <div className="justify-end"> {/* menu */}
          <Menu />
        </div>

      </header>

      <div className="flex flex-row items-center justify-between p-5 mb-15"> {/* need to make sure it adjusts with window size*/}
        <Image
          className="justify-start -m-30"
          src="/line.svg"
          alt="Golden line on left side"
          width={500}
          height={100}
          priority
        />

        <h2 className={"cherish text-[100px] -m-20 z-1"}>
          <Header /> {/* replace this with child */}
        </h2>

        <Image
          className="justify-end -m-30"
          src="/line.svg"
          alt="Golden line on left side"
          width={500}
          height={100}
          priority
        />
      </div>

      <div className="pr-10 pl-10">
        

      { children }

      </div>

      

      <footer className="mb-auto justify-end">
        <p className="mt-auto bottom-0 right-0 text-right raleway text-[12px]">
          Designed with Figma, built with NextJS and Tailwind CSS, deployed with Vercel
        </p>
      </footer>
    </>
  );
}
