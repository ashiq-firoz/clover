import React, { useRef, useState } from "react";
import { Monoton } from 'next/font/google'

export const monoton = Monoton({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

const ContactComponent = () => {
    const ref = useRef(null);
    const [hasSocialMedia, setHasSocialMedia] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSocialMediaChange = (e) => {
        setHasSocialMedia(e.target.value === 'yes');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        document.getElementById("subBtn").innerHTML = "Submitting...";
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });

            if (response.ok) {
                setShowPopup(true); // Display the popup on successful form submission
                form.reset();
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        document.getElementById("subBtn").innerHTML = "Submit message";
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className="bg-[#2C2C2C]">
            <br />
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">SEND US AN ENQUIRY! </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Connect Anytime, Anywhere - Work with Us
                    Wherever You are..</p>
                <form onSubmit={handleSubmit} className="space-y-8" method="POST" action="https://script.google.com/macros/s/AKfycbyejRgBNPktGQ5kuXX5KpENO9fdrBRWq7LPDLUjjUN3tpGqopmngDWlBljhr5-3oYSL/exec">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Contact</label>
                        <input type="text" id="contact"  name="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+971XXXXXXXXXX" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">How Can We Help You</label>
                        <textarea id="brand" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a Message"></textarea>
                    </div>
                    <button type="submit" id="subBtn" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Success!</h2>
                        <p className="text-gray-700">Your message has been successfully submitted.</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={closePopup} className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactComponent;
