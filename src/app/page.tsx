import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-cols-2 p-5 h-screen w-screen items-center m-5">
            <div className="grid grid-rows-auto">
                <h1 className="alata text-moon-yellow text-[96px]">AILUN SHI</h1>
                <h1 className="zhimangxing text-[120px]">施蔼伦</h1>
            </div>

            <div className="text-center">
                <Link href="/about" className="cherish text-[120px]">enter &rarr;</Link>
            </div>
            
        </div>
    )
}