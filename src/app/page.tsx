import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-cols-2 min-h-screen w-full items-center p-5">
            <div className="grid grid-rows-auto">
                <h1 className="alata text-moon-yellow text-[48px] sm:text-[96px]">AILUN SHI</h1>
                <h1 className="zhimangxing text-[72px] sm:text-[120px]">施蔼伦</h1>
            </div>

            <div className="text-right">
                <Link href="/about" className="cherish text-[72px] sm:text-[120px]">enter &rarr;</Link>
            </div>
            
        </div>
    )
}