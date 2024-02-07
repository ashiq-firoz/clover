import React, { useRef } from "react";
import { Monoton } from 'next/font/google'
import Modal from "./Modal";

export const monoton = Monoton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});
const ContactComponent = () => {
  const ref = useRef(null);

  return (
    <section className="min-h-screen  mx-auto p-10 bg-slate-300">
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto ">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6 ">
          <div className=" lg:w-1/2 lg:mx-6">
          <Modal/>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mx-6 ">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-neutral-100 lg:max-w-xl">
              <h1 className="text-xl font-medium text-neutral-900 dark:text-neutral-900 capitalize">
                Contact us
              </h1>

              <form className="mt-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="focus:border-transparent rounded-lg block w-full px-5 py-3 mt-2 text-gray-700 bg-white border-b border-gray-200  dark:bg-gray-200 dark:text-gray-950 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-opacity-40 dark:focus:border-blue-300  "
                  />
                </div>

                <div className="flex-1 mt-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="focus:border-transparent rounded-lg block w-full px-5 py-3 mt-2 text-gray-700 bg-white border-b border-gray-200  dark:bg-gray-200 dark:text-gray-950 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-opacity-40 dark:focus:border-blue-300  "
                  />
                </div>

                <div className="w-full mt-6">
                  <textarea
                    className="focus:border-transparent rounded-lg block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-b border-gray-200  md:h-48 dark:bg-gray-200 dark:text-gray-950  dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-opacity-40 dark:focus:border-blue-300 "
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 rounded-md mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500  hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;