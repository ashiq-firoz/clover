import { FiSend } from "react-icons/fi";

const AboutComponent = () => {
  return (
    <section className="container py-8 px-8  bg-neutral-200">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <img className="rounded-md" src="/img/about.webp" alt="" style={{ filter: "blur(0px)" }} />

        </div>
        <div className="col-span-2">
          <p className=" lg:text-3xl">
            We're on a mission to transform your online presence into an
            engaging, memorable, and relatable experience. Our focus is to
            bring creativity and strategy together in a way that helps your brand
            shine. We believe in a future where your social media is a hub of
            authentic connections, unique content, and continuous growth
          </p>
        </div>
      </div>
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
