
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="bg-[#130707]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 py-16">

        <motion.h2
          className="mb-8 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        <section id="about">
        <h2>About Me</h2>
        </section>
        </motion.h2>

        <motion.div
          className="rounded-2xl bg-black p-5 sm:p-7 backdrop-blur-sm drop-shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1, y: 0,
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            {/* About Me Section */}
            <motion.div
              className="flex flex-col gap-6 rounded-lg  p-4 sm:p-6 drop-shadow-md"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="font-medium text-lg sm:text-xl md:text-2xl text-white text-justify leading-relaxed max-w-[40rem]">
                Hello! I'm an aspiring developer currently learning React and Python, and working on
                building projects that will enhance my skills.
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="flex flex-col gap-6 rounded-lg bg-[#1a1a1a] p-4 sm:p-6 drop-shadow-md"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
              <div className="text-gray-300">
                <p className="font-semibold text-lg">TVL - ICT</p>
                <p className="text-gray-400">Tuy Senior High School</p>
                <p className="text-gray-400">2022 - 2024</p>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-lg">Bachelor of Science in Information Technology</p>
                <p className="text-gray-400">Batangas State University ARASOF - Nasugbu</p>
                <p className="text-gray-400">2024 - Present</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
