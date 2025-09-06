import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen justify-center items-center h-full w-full sm:p-10">
            <div className="text-center md:grid md:grid-rows-[auto]">
                <h1 className="alata text-moon-yellow text-[48px] md:text-[72px] lg:text-[96px]">AILUN SHI</h1>
                <h1 className="zhimangxing text-[72px] md:text-[96px] lg:text-[120px]">施蔼伦</h1>
                <h2 className="raleway italic text-moon-yellow">YA/Adult Fantasy Novelist</h2>
            </div>

            <div className="pt-20 md:pt-0 md:text-right">
                <Link href="/about" className="cherish text-[72px] md:text-[120px]">enter &rarr;</Link>
            </div>
            
        </div>
    )
}