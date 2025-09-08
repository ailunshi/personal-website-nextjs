"use client"
import { useState } from "react";

export default function ContactForm() {

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

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
            setSuccessMessage("Form submitted successfully");
            const formElement = e.target as HTMLFormElement;
            formElement.reset();
        } else {
            console.log("Error", data);
        }
    }

    return (
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
            {successMessage && <p>{successMessage}</p>}
        </form>
    )
}