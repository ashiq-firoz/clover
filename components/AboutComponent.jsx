import { FiSend } from "react-icons/fi";

const AboutComponent = () => {
  return (
    <section className="container py-8 px-8  bg-neutral-200">
      <br />
      <br />
      <div className="grid grid-cols-1 bg-origin-padding lg:grid-cols-5 gap-3 grid-flow-row-dense  ">
        <div className="mb-4 md:col-span-2 lg:col-span-2 lg:row-span-3 ">
          <div className="h-full    bg-neutral-100 rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg overflow-hidden">
            <span className="font-serif text-5xl text-black ring-gray-400 ">
              Get to know us
            </span>
            <br />
            <p className="text-black border-solid font-mono">
              Check out our latest listings
              <br />
              <br />
              <NeumorphismButton />
              <br />
            </p>
          </div>
        </div>

        <div className="mb-4 md:col-span-2 lg:col-span-3 lg:row-span-12">
          <div className="h-full p-5 border border-white-600  bg-neutral-100 rounded-xl bg-opacity-88 backdrop-filter backdrop-blur-lg">
            <span className="font-consolas font-semibold text-3xl ">
              We are a team who is passionate about social media and digital
              marketing. We started this company to help businesses and
              individuals leverage the power of social media to achieve their
              marketing objectives.
            </span>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

const NeumorphismButton = () => {
  return (
    <button
      className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-slate-500
          bg-white
          
          
          transition-all
  
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-green-500
      `}
    >
      <FiSend />
      <span className="">Get in Touch</span>
    </button>
  );
};

export default AboutComponent;
