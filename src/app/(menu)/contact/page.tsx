import icons from "../socials";
import ContactForm from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Information on how to contact Ailun Shi"
};

export default function Contact() {

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-30">
            <div className="text-left text-[20px] raleway">
                <p className="pb-5">
                    For rights inquiries, please contact Leah Pierre at <a href="https://www.ladderbird.com/" target="_blank" className="text-moon-yellow">Ladderbird Literary.</a><br />
                </p>
                <p className="pb-5">
                    For other inquiries, fill out the form &rarr;<br />
                </p>
                <p className="pb-5">
                    Otherwise, find me elsewhere below:<br />
                </p>
                <div className="flex flex-row justify-center items-center gap-10">
                    { icons.instagram }
                    { icons.substack }
                </div>
                
            </div>

            <div>
                <ContactForm />

            </div>
        </div>
    )
}