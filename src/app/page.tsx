import Link from "next/link";

export default function Home() {
    return (
        <div className="grid sm:grid-cols-2 min-h-screen items-center h-full w-full sm:p-10">
            <div className="grid grid-rows-[auto]">
                <h1 className="alata text-moon-yellow text-[48px] md:text-[72px] lg:text-[96px]">AILUN SHI</h1>
                <h1 className="zhimangxing text-[72px] md:text-[96px] lg:text-[120px]">施蔼伦</h1>
            </div>

            <div className="-mt-130 sm:mt-0 text-left sm:text-right">
                <Link href="/about" className="cherish text-[72px] md:text-[120px]">enter &rarr;</Link>
            </div>
            
        </div>
    )
}