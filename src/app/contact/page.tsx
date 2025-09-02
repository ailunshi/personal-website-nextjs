

export default function Contact() {
    return (
        <div className="grid grid-cols-2 gap-30">
            <div className="text-left text-[24px] raleway">
                <p className="pb-5">
                    For rights inquiries, please contact Leah Pierre at Ladderbird Literary.<br />
                </p>
                <p>
                    For other inquiries, fill out the form -&gt;
                </p>
            </div>

            <div>
                <form className="grid grid-rows raleway">
                    <label className="grid grid-rows">Name 
                        <input type="text" name="name" /> 
                    </label>
                    

                    <label className="grid grid-rows">Email
                        <input type="email" name="email" />
                    </label>
                    

                    <label className="grid grid-rows">Subject
                        <input type="text" name="subject"/>
                    </label>
                    

                    <label className="grid grid-rows">Message
                        <textarea name="message"></textarea>
                    </label>
                    

                    <button>Submit</button>

                </form>
            </div>
        </div>
    )
}