
import { FiSend } from "react-icons/fi";

const AboutComponent = () => { 
    return (
        <div className="container bg-gradient-to-b from-green-700 via-emerald-400 to-emerald-200 py-8 px-8  ">
            <br /><br />
            <div className="grid grid-cols-1 bg-origin-padding lg:grid-cols-5 gap-3 grid-flow-row-dense  ">
                <div className="mb-4 md:col-span-2 lg:col-span-2 lg:row-span-3 ">
                    <div className="h-full   bg-[#ffe9ec]` rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg overflow-hidden">
                        <span className="font-serif text-5xl text-white ring-gray-400 ">Get to know us</span><br />
                        <p className="text-white border-solid font-mono">
                            Check out our latest listings
                            <br /><br />
                            <NeumorphismButton />
                            <br />
                        </p>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-2">
                    <div className="h-full p-5 border border-white-600   bg-neutral-100 rounded-xl bg-opacity-88 backdrop-filter backdrop-blur-lg my-0.75">
                    <br />
                    <span className="font-consolas font-semibold text-3xl ">Rent & Sale</span><br />    
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-2 lg:row-span-2">
                    <div className="h-full p-5 border border-white-600  bg-neutral-100 rounded-xl bg-opacity-88 backdrop-filter backdrop-blur-lg">
                    <span className="font-consolas font-semibold text-3xl ">Prime Locations of Dubai are under Your Reach Now!</span><br />
                        
                    </div>
                </div>

            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

const NeumorphismButton = () => {
    return (
        <button
            className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-slate-500
          bg-white
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          
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