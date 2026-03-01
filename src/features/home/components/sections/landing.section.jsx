import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const LandingSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-12 lg:pt-0 flex items-center bg-white overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-6 md:px-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-10">
          
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1
              className="font-stardom font-semibold leading-[1.05] tracking-tight text-black
              text-[1.8rem] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[4rem]
             "
            >
              Gojaunt, where Every Journey Brings Joy
            </h1>

            <h3
              className="font-medium text-gray-500 mt-6 leading-tight lg:leading-[1.2]
              text-sm sm:text-base md:text-lg lg:text-[1.5rem] xl:text-[1.8rem]
              max-w-[30ch] sm:max-w-[40ch] md:max-w-[45ch] lg:max-w-[35ch] xl:max-w-[40ch]"
            >
              Embark on a journey where every moment holds discovery, from
              lively streets to serene natural wonders.
            </h3>

            <NavLink
              to="/services"
              className="group relative flex items-center gap-6 bg-black text-white mt-8 lg:mt-10 pl-6 pr-2 py-2 rounded-full transition-all duration-500 hover:bg-[#3A74FF]"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                Start Your Story
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-[-12deg] transition-transform duration-500">
                <ArrowRight size={20} />
              </div>
            </NavLink>
          </div>

          {/*right*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[45%] relative flex justify-center lg:justify-end -mt-14"
          >
            <div className="relative flex items-start gap-4 md:gap-6 scale-90 sm:scale-100 lg:scale-90 xl:scale-100">
              <div
                className="w-48 h-[18rem] sm:w-64 sm:h-[28rem] md:w-80 md:h-[36rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[5rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700"
                style={{ backgroundImage: "url('assets/eiffelTower.jpg')" }}
              >
                <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[5rem] ring-1 ring-black/5" />
              </div>

              <div
                className="w-40 h-[14rem] sm:w-56 sm:h-[22rem] md:w-72 md:h-[28rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[5rem] shadow-2xl mt-16 sm:mt-24 md:mt-32 -ml-10 sm:-ml-12 md:-ml-20 transform rotate-6 hover:rotate-0 transition-transform duration-700 border-4 md:border-8 border-white"
                style={{ backgroundImage: "url('assets/bigBen.jpg')" }}
              >
                <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[5rem] ring-1 ring-black/5" />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-4 md:-left-16 bg-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400">Happy Travelers</p>
                    <p className="text-xs md:text-sm font-bold">12k+ Global</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandingSection;
