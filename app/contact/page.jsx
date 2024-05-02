"use client"
import React, { useRef, useState } from "react";
import { Monoton } from 'next/font/google';

export const monoton = Monoton({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

const ContactComponent = () => {
    const ref = useRef(null);
    const [hasSocialMedia, setHasSocialMedia] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleSocialMediaChange = (e) => {
        setHasSocialMedia(e.target.value === 'yes');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });

            if (response.ok) {
                setShowSuccessPopup(true);
                form.reset();
            } else {
                setShowErrorPopup(true);
            }
        } catch (error) {
            setShowErrorPopup(true);
        }
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    const closeErrorPopup = () => {
        setShowErrorPopup(false);
    };

    return (
        <section  style={ {
            backgroundImage: "url('/img/book1.jpg')",
            backgroundSize: "100vw auto",
            '@screen sm': { // Apply 100vw auto for screens equal to or larger than sm
                backgroundSize: "none",
              },
          }}>
            <br /><br />
            <div className="py-16 lg:py-18 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">BOOK NOW! </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Connect Anytime, Anywhere - Work with Us
                    Wherever You are..</p>
                <form onSubmit={handleSubmit} method="POST" action="https://script.google.com/macros/s/AKfycbwD_Y3rXsMNHBqjgwxHCxz2ayMUOowOpcYRgnGGlGL2m7BRyDUoTJ9YtOgAnuOAAL_q/exec" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">Name</label>
                        <input type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">Email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black"> Contact Number</label>
                        <input type="text" id="contact" name="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+971XXXXXXXXXX" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">Your Business Type</label>
                        <select name="Business Type" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                            <option value="question">Choose Type</option>
                            <option value="Product">Product</option>
                            <option value="Service">Service</option>
                            <option value="Mixed">Mixed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">About Your Business</label>
                        <input type="text" id="about" name="About Business" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">Preferred social media platform:</label>
                        <select name="preferred Social Media" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="linkedin">Linkedin</option>
                            <option value="tiktok">Tiktok</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold text-black">Do you have an existing social media page?</label>
                        <select id="socialMedia" name="Have Social Media" onChange={handleSocialMediaChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    {hasSocialMedia && (
                        <div>
                            <label className="block mb-2 text-xl font-bold text-black">Select social media platform:</label>
                            <select name="Current Social Media" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                    )}
                    {hasSocialMedia && (
                        <div>
                        <label className="block mb-2 text-xl font-bold text-black">Social Media page URL</label>
                        <input type="text" id="url" name="url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://www.instagram.com/company/" required />
                    </div>
                    )}
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-xl font-bold text-black">Describe your Brand Voice (Optional)</label>
                        <textarea id="brand" name="Brand Voice" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="(eg:playful,professional,educational) "></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>

            {showSuccessPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Success!</h2>
                        <p className="text-gray-700">Your message has been successfully submitted.</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={closeSuccessPopup} className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showErrorPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Error!</h2>
                        <p className="text-gray-700">There was an error submitting your message. Please try again later.</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={closeErrorPopup} className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
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
