import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Project() {
  return (
    <div className="bg-[#000000]">
      <section id="project"></section>
      <div className="container mx-auto py-16">
        {/* Section Heading */}
        <motion.h2
          className="mb-8 text-center font-extrabold text-white text-[6rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Only animate once
        >
          PROJECT
        </motion.h2>

        {/* Project Cards */}
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
          {/* Card 1: Text-to-Speech */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 bg-[#000000] p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }} // Only animate once
          >
            <a
              href="https://github.com/Tashumii/TTS_GUI"
              className="text-2xl font-medium text-white hover:text-[#FF1A1A] transition-colors"
            >
              Text To Speech
            </a>
            <span className="font-medium text-gray-400">
              This project is a Python-based Text-to-Speech (TTS) Application
              that allows users to input text, listen to it spoken aloud, and
              save it as an audio file. The application features a user-friendly
              graphical interface created with Tkinter and uses the pyttsx3
              library for text-to-speech conversion. It also includes
              customizable speech rate and volume settings.
            </span>
            <span className="flex gap-2 font-medium text-gray-400">
              <span>Status</span>
              <span>·</span>
              <span>2024</span>
            </span>
          </motion.div>

          {/* Card 2: Enhancing Portfolio */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 bg-[#000000] p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }} // Only animate once
          >
            <span className="text-2xl font-medium text-white">Processing...</span>
            <span className="font-medium text-gray-400">
              "Enhancing My Portfolio" – Showcasing my skills, projects, and
              experience through continuous improvement and strategic updates to
              create a stronger professional presence.
            </span>
            <span className="flex gap-2 font-medium text-gray-400">
              <span>Status</span>
              <span>·</span>
              <span>2025</span>
            </span>
          </motion.div>

          {/* Card 3: Habit Tracker */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 bg-[#000000] p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }} // Only animate once
          >
            <span className="text-2xl font-medium text-white">Planning...</span>
            <span className="font-medium text-gray-400">
              Planning to build a simple habit tracker that helps users log
              activities, set goals, and track progress with a clean and
              intuitive interface.
            </span>
            <span className="flex gap-2 font-medium text-gray-400">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.div>

          {/* Card 4: Social Media or AI */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 bg-[#000000] p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A] backdrop-blur-[10px]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-2xl font-medium text-white">To Be Soon...</span>
            <span className="font-medium text-gray-400">
              "I Want to Build a Social Media Application or AI" – A future
              project aimed at enhancing my skills and fostering collaboration,
              exploring innovative technologies to create impactful digital
              experiences.
            </span>
            <span className="flex gap-2 font-medium text-gray-400">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
