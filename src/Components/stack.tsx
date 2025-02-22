import { motion } from "framer-motion"; // Import motion from framer-motion
import { useEffect, useState } from "react";

export default function Stack() {
  const [currentTime, setCurrentTime] = useState("");

  const getCurrentTimeInPhilippines = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return now.toLocaleTimeString("en-US", options);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimeInPhilippines());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto py-8 sm:py-16">
        {/* Section Heading */}
        <motion.div
          className="text-center text-white mb-10 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Only animate once
        >
          <section id="stack"></section>
          <h1 className="text-4xl sm:text-6xl md:text-[6rem] font-extrabold drop-shadow-lg text-white">
            STACK | TOOLS
          </h1>
          <p className="text-xl sm:text-2xl text-white-600 mt-4">
            Current Time in Philippines: {currentTime}
          </p>
        </motion.div>

        {/* Stack Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Frontend Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-6 sm:gap-8 bg-[#000000] p-4 sm:p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} // Only animate once
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Frontend
            </h2>
            <ul className="space-y-2">
              {["React.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"].map(
                (item, index) => (
                <li key={index} className="text-xl sm:text-2xl text-red-600">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-6 sm:gap-8 bg-[#000000] p-4 sm:p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }} // Only animate once
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Backend
            </h2>
            <ul className="space-y-2">
              {["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL"].map(
                (item, index) => (
                <li key={index} className="text-xl sm:text-2xl text-red-600">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-white">
                Primary Language
              </h3>
              <p className="text-red-600 text-xl sm:text-2xl">Python</p>
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-6 sm:gap-8 bg-[#000000] p-4 sm:p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }} // Only animate once
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Tools
            </h2>
            <ul className="space-y-2">
              {["Git", "Docker", "VS Code", "Postman", "Figma"].map(
                (item, index) => (
                <li key={index} className="text-xl sm:text-2xl text-red-600">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
