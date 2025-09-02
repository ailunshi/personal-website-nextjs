"use client"
import { useState } from "react";

export default function Contact() {

    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        if (!name || !email || !subject || !message) {
            setErrorMessage("Please fill out all fields");
            return;
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