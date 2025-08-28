import Image from "next/image";
import { Alata, Raleway, Cherish } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
})

export default function About() {
    return (
        <div className="flex flex-row gap-5"> {/* div for photo and text */}
            <Image 
            src="/DSC01700.jpg"
            width={350}
            height={500}
            alt="Profile picture of Ailun Shi"
            />

            <div className="flex flex-col mr-15 p-5"> {/* div for text and socials */}
            <p className="text-white font-raleway p-5 text-3xl">
                Ailun Shi (pronounced Allen) is a novelist currently based in the Bay Area who 
            has lived across Shanghai, Las Vegas, Los Angeles, Wuhan, and Madrid.

            </p>

            <p className="text-white font-raleway p-5 text-3xl">
            She recently graduated from UC Berkeley. Outside of writing, 
            she’s a competitive ballroom dancer, language enthusiast, and occasional half-marathon runner.
            </p>

                <div className="flex flex-row justify-center items-center p-5 gap-15"> {/* div for links */}
                    <a 
                    href="https://www.instagram.com/ailunshii/?hl=en" 
                    target="_blank"
                    className="2xl"
                    >
                    INSTAGRAM
                    </a>

                    <a 
                    href="https://ailun.substack.com/"
                    target="_blank"
                    className="2xl"
                    >
                    SUBSTACK
                    </a>

                </div>
          
            </div>
      </div>
    )
}