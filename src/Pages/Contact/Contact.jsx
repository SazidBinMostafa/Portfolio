import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


function Contact() {

    const [buttonText, setButtonText] = useState("Send");

    const EmailJSServiceId= import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EmailJSTemplateId= import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EmailJSPublicKey= import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setButtonText("Sending...");

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const mail = {name, email, message};

        emailjs.send(EmailJSServiceId, EmailJSTemplateId, mail, { publicKey: EmailJSPublicKey })
        .then(res=>{
            if(res.status === 200){
                setButtonText("Send")
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    timer: 1500
                  });
            }
        })

    }

    return <>
        <div className="min-h-screen flex items-center justify-center mx-5">
            <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-black p-8 rounded-lg shadow-2xl w-full max-w-md text-white space-y-6">
                <h2 className="text-3xl font-bold text-center">Get in touch</h2>
                <p className="text-center text-sm">Reach out to web hero across the cosmos!</p>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-2 mt-1 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full p-2 mt-1 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="w-full p-2 mt-1 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-lg text-lg transition"
                        >{buttonText}</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Contact;