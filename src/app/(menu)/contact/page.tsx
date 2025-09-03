"use client"
import { useState } from "react";

export default function Contact() {

    const [errorMessage, setErrorMessage] = useState("");
    //const accessKey: string = process.env.WEB_API_KEY;
    //console.log(`access key is ${accessKey}`)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

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
        <div className="grid grid-cols-2 gap-30">
            <div className="text-left text-[20px] raleway">
                <p className="pb-5">
                    For rights inquiries, please contact Leah Pierre at Ladderbird Literary.<br />
                </p>
                <p>
                    For other inquiries, fill out the form -&gt;
                </p>
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