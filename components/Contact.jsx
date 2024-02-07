import React, { useRef } from "react";

const ContactComponent = () => {
  const ref = useRef(null);

  return (
    <section className="min-h-screen  mx-auto p-10 bg-slate-300">
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto ">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6 ">
          <div className=" lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
              Get in Touch
            </h1>

            <p className="max-w-xl mt-6">
              Ask us everything and we would love to hear from you
            </p>

            <div className="mt-6 space-y-8 md:mt-8 ">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2  truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <span className="mx-2  truncate w-72">(257) 563-7401</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2  truncate w-72">acb@example.com</span>
              </p>
            </div>
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
