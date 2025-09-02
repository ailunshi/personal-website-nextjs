import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-row gap-10"> {/* div for photo and text */}
            <Image 
            src="/DSC01700.jpg"
            width={0}
            height={0}
            alt="Profile picture of Ailun Shi"
            sizes="100vw"
            style={{width: "30%", height: "auto"}}
            />

            <div className="flex flex-col mr-5 p-5"> {/* div for text and socials */}
                <p className={`text-white raleway p-5 text-2xl`}>
                    Ailun Shi (pronounced Allen) is a novelist currently based in the Bay Area who 
                has lived across Shanghai, Las Vegas, Los Angeles, Wuhan, and Madrid.

                </p>

                <p className={`text-white raleway p-5 text-2xl`}>
                She recently graduated from UC Berkeley. Outside of writing, 
                she’s a competitive ballroom dancer, language enthusiast, and occasional half-marathon runner.
                </p>

                <div className="flex flex-row justify-center items-center p-5 gap-15"> {/* div for links */}
                    <a 
                    href="https://www.instagram.com/ailunshii/?hl=en" 
                    target="_blank"
                    className="2xl socials"
                    >
                    INSTAGRAM
                    </a>

                    <a 
                    href="https://ailun.substack.com/"
                    target="_blank"
                    className="2xl socials"
                    >
                    SUBSTACK
                    </a>

                </div>
          
            </div>
      </div>
    )
}