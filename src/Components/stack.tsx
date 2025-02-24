import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

export default function Stack() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto py-8 sm:py-16">
        {/* Section Heading */}
        <motion.div
          className="text-center text-white mb-10 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <section id="stack"></section>
          <h1 className="text-4xl sm:text-6xl md:text-[6rem] font-extrabold drop-shadow-lg text-white">
            STACK | TOOLS
          </h1>
        </motion.div>

        {/* Stack Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Frontend Section */}
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-8 bg-[#000000] p-6 rounded-[10rem]  min-h-[28rem] w-full max-w-[30rem] backdrop-brightness-100 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Frontend
            </h2>
            <ul className="space-y-4">
              {[
                { name: "React.js", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
                { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
                { name: "HTML5/CSS3", icon: <span className="text-2xl">🛠️</span> },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-xl sm:text-2xl text-white group">
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400 ml-2">
                    {item.name} tooltip
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-8 bg-[#000000] p-6 rounded-[10rem]  min-h-[28rem] w-full max-w-[30rem] backdrop-brightness-100 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Backend
            </h2>
            <ul className="space-y-4">
              {[
                { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#68A063]" /> },
                { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-white" /> },
                { name: "Python", icon: <FaPython className="w-8 h-8 text-[#3776AB]" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#336791]" /> },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-xl sm:text-2xl text-white group">
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400 ml-2">
                    {item.name} tooltip
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-white">
                Primary Language
              </h3>
              <p className="text-red-600 text-xl sm:text-2xl flex items-center gap-2">
                <FaPython className="w-6 h-6" /> Python
              </p>
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-8 bg-[#000000] p-6 rounded-[10rem] min-h-[28rem] w-full max-w-[24rem] backdrop-brightness-100 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Tools
            </h2>
            <ul className="space-y-4">
              {[
                { name: "Git", icon: <FaGit className="w-8 h-8 text-[#F05032]" /> },
                { name: "Docker", icon: <FaDocker className="w-8 h-8 text-[#2496ED]" /> },
                { name: "Postman", icon: <SiPostman className="w-8 h-8 text-[#FF6C37]" /> },
                { name: "Figma", icon: <FaFigma className="w-8 h-8 text-[#F24E1E]" /> },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-xl sm:text-2xl text-white group">
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400 ml-2">
                    {item.name} tooltip
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
