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

    const handleSocialMediaChange = (e) => {
        setHasSocialMedia(e.target.value === 'yes');
    };

    return (
        <section className="bg-black">
            <br />
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">BOOK NOW! </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Connect Anytime, Anywhere - Work with Us
                    Wherever You are..</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="hello@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Contact Number</label>
                        <input type="text" id="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+code 38383838" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Your Business Type</label>
                        <select name="type" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                            <option value="question">Choose Type</option>
                            <option value="Product">Product</option>
                            <option value="Service">Service</option>
                            <option value="Mixed">Mixed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">About Your Business</label>
                        <input type="text" id="about" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div>
                            <label className="block mb-2 text-sm font-medium text-gray-300">Preferred social media platform:</label>
                            <select name="preferred Social Media" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                     {/* Existing Social Media Page */}
                     <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Do you have an existing social media page?</label>
                        <select id="socialMedia" name="socialMedia" onChange={handleSocialMediaChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                            <option value="choose">Choose</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    {/* Social Media Dropdown */}
                    {hasSocialMedia && (
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-300">Select social media platform:</label>
                            <select name="socialMediaType" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="type">
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                    )}
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">Describe your Brand Voice (Optional)</label>
                        <textarea id="brand" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="(eg:playful,professional,educational) "></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactComponent;
