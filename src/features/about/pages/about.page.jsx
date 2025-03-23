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

  // Floating background elements animation
  const floatingVariants = {
    float: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-[#ffd8d8] rounded-full opacity-30"
        variants={floatingVariants}
        custom={0}
        animate="float"
      />
      <motion.div
        className="absolute top-1/3 right-24 w-12 h-12 bg-[#d3e3fd] rounded-lg opacity-40"
        variants={floatingVariants}
        custom={1}
        animate="float"
      />
      <motion.div
        className="absolute bottom-40 left-1/3 w-16 h-16 bg-[#ffe8cc] rounded-full opacity-30"
        variants={floatingVariants}
        custom={2}
        animate="float"
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-3xl md:text-5xl font-stardom  lg:text-6xl xl:text-7xl font-bold py-12 md:py-16 lg:py-24 px-4 max-w-6xl mx-auto"
        style={{
          background: "linear-gradient(45deg, #2b2d42, #4a4e69, #8d99ae)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        At GoJaunt, we turn travel dreams into unforgettable journeys!
      </motion.h1>

      {/* Content Sections */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative my-16 md:my-24 ${
              index % 2 === 0 ? "md:pl-12" : "md:pr-12"
            }`}
          >
            <div className="relative z-10">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-stardom cursor-default ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
                style={{
                  background: "linear-gradient(45deg, #f8f9fa, #e9ecef)",
                  WebkitBackgroundClip: "text",
                }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-2xl ${
                  index % 2 === 0 ? "text-left" : "ml-auto text-right"
                }`}
                style={{ color: "#495057" }}
              >
                {section.text}
              </motion.p>
            </div>

            {/* Hover effect background */}
            <motion.div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                index % 2 === 0 ? "-left-12" : "-right-12"
              }`}
              initial={{ scale: 0.9 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Animated border divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default About;
