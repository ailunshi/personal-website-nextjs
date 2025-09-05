"use client"
import { useState } from "react";
import icons from "../socials";

export default function Contact() {

    const [errorMessage, setErrorMessage] = useState("");
    //const accessKey: string = process.env.WEB_API_KEY;
    //console.log(`access key is ${accessKey}`)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (!formData.get("name") || !formData.get("subject") || !formData.get("email") || !formData.get("message")) {
            setErrorMessage("Please fill out all fields");
            return;
        }

        formData.append("access_key", "238866f8-386e-4f11-bb66-449e57d9fbfd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Form submitted successfully");
            const formElement = e.target as HTMLFormElement;
            formElement.reset();
        } else {
            console.log("Error", data);
        }
    }

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
                <form 
                    className="grid grid-rows raleway"
                    onSubmit={handleSubmit}
                >
                    <label className="grid grid-rows">Name 
                        <input 
                            type="text" 
                            name="name" 
                             /> 
                    </label>
                    

                    <label className="grid grid-rows">Email
                        <input type="email" name="email"  />
                    </label>

                    <label className="grid grid-rows">Subject
                        <input type="text" name="subject" />
                    </label>
                    

                    <label className="grid grid-rows">Message
                        <textarea name="message" ></textarea>
                    </label>
                    

                    <button 
                        className="place-self-center text-[16px]"
                    >
                        SUBMIT
                    </button>

                    {errorMessage && <p>{errorMessage}</p>}
                    {/* when it errors, make empty boxes glow for a second ? */}
                </form>

                
                
            </div>
        </div>
    )
}