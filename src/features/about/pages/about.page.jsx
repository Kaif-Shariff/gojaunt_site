import { motion } from "framer-motion";

const About = () => {
  const sections = [
    {
      title: "About",
      text: "Gojaunt provides seamless travel solution that is tailored for everyone",
    },
    {
      title: "Mission",
      text: "Our mission is to provide a smooth travel experience to our customers",
    },
    {
      title: "Vision",
      text: "Our vision is to become your one and only travel agent",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Heading */}
      <h1 className="text-center text-3xl md:text-6xl lg:text-6xl xl:text-8xl font-bold text-black py-8 md:py-12 lg:py-20 px-4 font-stardom">
        At GoJaunt, we turn travel dreams into unforgettable journeys!
      </h1>

      {/* Content Sections */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } my-12 md:my-20`}
          >
            <div
              className={`max-w-xl w-full ${
                index % 2 === 0 ? "md:ml-4" : "md:mr-4"
              } mx-auto md:mx-4`}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300 mb-4 font-stardom">
                {section.title}
              </h2>
              <p
                className={`text-lg md:text-3xl text-[#56585E] font-helveticaBoldl̥ ${
                  index % 2 === 0 ? "text-left" : "md:text-right"
                }`}
              >
                {section.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
