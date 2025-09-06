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
    <div className="min-h-screen">
      {/* header */}
      <header className="justify-between flex flex-row items-center text-white pb-3"> 
        <div className="justify-start">
          <Link href="/" className={`alata text-moon-yellow text-[30px] sm:text-[48px]`}>AILUN SHI</Link>
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

        <h2 className={"relative text-white cherish text-[72px] sm:text-[100px] -m-20 z-0 pointer-events-none item-center"}>
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
      <div className="sm:pr-10 sm:pl-10">
        { children }
      </div>
    </div>
  );
}
