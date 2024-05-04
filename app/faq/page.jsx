"use client"
import { Antonio } from 'next/font/google'
import { useState } from 'react';

export const antonio = Antonio({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <br /><br />
            <div className="py-16 lg:py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <center>

                <h2 className={`${antonio.className} mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white`}>FREQUENTLY ASKED QUESTIONS</h2>
                </center>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3
                                className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                                onClick={() => toggleAnswer(0)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                How often will you post on social media accounts?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                            We provide a variety of social media management solutions that are tailored to each of our clients' specific needs. The number of posts we generate and publish on your social media accounts varies per package, with options ranging from 8 to 16 posts per month, depending on your demands. Nonetheless, we constantly work with our clients to identify the best posting frequency to help them achieve their goals.
                            </p>
                        </div>
                        <div className="mb-10">
                            <h3
                                className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                                onClick={() => toggleAnswer(1)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                Will you create the content for our social media accounts?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                            Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.
                            </p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(2)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                Will you create the content for our social media accounts?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 2 ? 'block' : 'hidden'}`}>Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(3)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                How does support work?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 3 ? 'block' : 'hidden'}`}>At Clover Creative Agency, we specialise in creating engaging and high-quality content for social media platforms. Our experienced team of content creators can work with you to develop a comprehensive content strategy that aligns with your business goals and reflects your brand identity. From social media posts to custom graphic videos, we have the expertise to produce compelling content that will capture the attention of your target audience and boost your online presence.</p>
                           
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(4)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                Do you offer paid social media advertising services?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 4 ? 'block' : 'hidden'}`}>Yes, we offer paid social media advertising services across a range of platforms. Our experienced team of social media advertising experts can help you create highly targeted campaigns that deliver measurable results and drive business growth. Although please note that external advertisement such as Google Ads and Instagram boosts will have additional costs</p>
                            
                        </div>
                        <div className="mb-10">
                          
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(5)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                Can you help me improve my social media presence even if I don't have any accounts set up yet?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 5 ? 'block' : 'hidden'}`}>Yes, we can certainly help you improve your social media presence even if you don't have any accounts set up yet. Our team can work with you to determine which social media platforms would be the most effective for your business and help you create and set up those accounts. We can also develop a customized social media strategy to ensure that your business is maximizing its potential on those platforms. Contact us for more information on how we can help you get started. </p>
                            
                        </div>
                        <div className="mb-10">
                       
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(6)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                How do you get in touch with our team if you have questions or concerns?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 6 ? 'block' : 'hidden'}`}>If you have any questions or concerns, we are always happy to hear from you. You can reach out to our team by submitting an application on our website, which is the best way to get started with our services. Alternatively, you can also send us a message on Instagram and we'll get back to you as soon as possible.</p>
                            
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(7)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                Will you have access to the analytics and insights for the social media accounts?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 7 ? 'block' : 'hidden'}`}>As part of our service, we create compelling social media content that aligns with your brand and engages your audience. Depending on the package you choose, we can either post and schedule the content for you or hand it over to you for posting at your own convenience. We are committed to transparency and open communication with our clients</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(8)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                What is the process for collaborating with our team?
                            </h3>
                           
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 8 ? 'block' : 'hidden'}`}>Upon submission of your application, our team will contact you to schedule a meeting where we can discuss your project requirements and explore different payment plans that suit your needs. This is an opportunity for us to get to know your business and understand your goals, so that we can provide tailored recommendations for your social media strategy. Once we have finalised the project details and agreed on a payment plan, our team will keep you updated on the progress of your social media campaign with regular reports and insights. At any point during the process, if you have questions or concerns, we encourage you to reach out to our team. We value our clients' feedback and believe that collaboration is key to achieving successful social media campaigns.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(9)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                How do I know if my business is a good fit for Clover Creative's services?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 9 ? 'block' : 'hidden'}`}>If you're looking to enhance your social media presence, increase your brand awareness, and engage your audience more effectively, our services might be a good fit for you. Our team of social media experts will work with you to understand your unique needs, goals, and challenges, and provide customised solutions that meet your specific requirements and budget.</p>
                            
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(10)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                How much input will I have in the content that is created for my social media accounts?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 10 ? 'block' : 'hidden'}`}>We believe that collaboration with our clients is key to creating successful social media campaigns. We welcome and encourage your input throughout the process. We will work closely with you to ensure that we have a clear understanding of your brand, voice, and messaging, and will develop content that is tailored to your specific needs and preferences. We will also provide you with drafts and revisions for approval before finalising the content. </p>
                            
                        </div>
                        <div className="mb-10">
                           
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer" 
                              onClick={() => toggleAnswer(11)}
                            >
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                What social media platforms do you work on?
                            </h3>
                            <p className={`text-gray-500 dark:text-gray-400 ${activeIndex === 11 ? 'block' : 'hidden'}`}>We work on Instagram, Facebook, TikTok and Linkedin. </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
