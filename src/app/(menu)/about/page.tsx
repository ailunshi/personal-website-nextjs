import Image from "next/image";
import icons from "../socials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Ailun Shi"
};

export default function About() {

    return (
        <div className="flex flex-col items-center justify-center gap-10 md:flex md:flex-row"> {/* div for photo and text */}
            <Image 
                src="/DSC01700.jpg"
                width={0}
                height={0}
                alt="Profile picture of Ailun Shi"
                sizes="100vw"
                style={{height: "auto"}}
                className="mx-auto w-4/5 md:w-1/3"
            />

            <div className="flex flex-col md:pr-5 md:p-10"> {/* div for text and socials */}
                <p className={`text-white raleway pb-5 text-[20px]`}>
                    Ailun Shi (pronounced Allen) is a novelist currently based in the Bay Area who 
                has lived across Shanghai, Las Vegas, Los Angeles, Wuhan, and Madrid.

                </p>

                <p className={`raleway text-[20px]`}>
                She recently graduated from UC Berkeley. Outside of writing, 
                she’s a competitive ballroom dancer, language enthusiast, and occasional half-marathon runner.
                </p>

                <div className="flex flex-row justify-center items-center p-5 gap-15"> {/* div for links */}

                    { icons.instagram }
                    { icons.substack }

                </div>
          
            </div>
      </div>
    )
}