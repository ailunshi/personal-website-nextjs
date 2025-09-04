import Menu from "./menu";
import Header from "./header";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* header */}
      <header className="justify-between flex flex-row items-center text-white pb-3"> 
        <div className="justify-start">
          <Link href="/" className={`alata text-moon-yellow text-[48px]`}>AILUN SHI</Link>
        </div>

        {/* menu */}
        <div className="justify-end"> 
          <Menu />
        </div>

      </header>

      {/* Golden lines + page title */}
      <div className="flex flex-row items-center justify-between p-5 mb-15 overflow-x-clip">
        <Image
          className="justify-start -m-30 w-[40vw] max-w-[500px] h-auto object-contain"
          src="/line.svg"
          alt="Golden line on left side"
          width={500}
          height={100}
          priority
        />

        <h2 className={"cherish text-[100px] -m-20 z-1 item-center"}>
          <Header />
        </h2>

        <Image
          className="justify-end -m-30 w-[40vw] max-w-[500px] h-auto object-contain"
          src="/line.svg"
          alt="Golden line on left side"
          width={500}
          height={100}
          priority
        />
      </div>

      {/* Page Content */}
      <div className="pr-10 pl-10">
        { children }
      </div>

      {/* Footer Content*/}
      <footer className="mb-auto justify-end">
        <p className="mt-auto bottom-0 right-0 text-right raleway text-[12px] italic">
          Designed with Figma, built with NextJS and Tailwind CSS, deployed with Vercel
        </p>
      </footer>
    </>
  );
}
