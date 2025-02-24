import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="bg-[#000000]">
      <section id="about"></section>
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <motion.h2
          className="font-extrabold text-white drop-shadow-md text-[6rem] text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h2>

        {/* Content Section */}
        <motion.div
          className="rounded-2xl p-5 sm:p-7 backdrop-blur-sm drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              className="flex flex-col gap-6 rounded-lg p-4 sm:p-6 drop-shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <p className="font-medium text-lg sm:text-xl md:text-4xl text-[#FFFFFF] text-justify leading-relaxed max-w-[40rem]">
                Hi! I'm a passionate developer, currently learning PostgreSQL and Python while working on projects to sharpen my skills.
              </p>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div
              className="relative flex flex-col gap-8 items-start w-full max-w-[45rem] px-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FF1A1A] text-center w-full">Education Timeline</h3>

              {/* Timeline Container */}
              <div className="relative border-l-4 border-gray-400 pl-6 space-y-8">
                {/* School 1 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="absolute w-1 h-1 bg-[#FF1A1A] rounded-full left-[-8px] pt-10"></div>
                  <div className="text-white">
                    <p className="text-lg font-semibold">Information Communication Technologies</p>
                    <p className="text-gray-400">Tuy Senior High School</p>
                    <p className="text-gray-500">2022 - 2024</p>
                  </div>
                </motion.div>

                {/* School 2 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                <div className="absolute w-1 h-1 bg-[#FF1A1A] rounded-full left-[-8px] pt-10"></div>
                  <div className="text-white">
                    <p className="text-lg font-semibold pb-1.5">Bachelor of Science in Information Technology</p>
                    <p className="text-gray-400 pb-1.5">Batangas State University ARASOF - Nasugbu</p>
                    <p className="text-gray-500">2024 - Present</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Playlist Section */}
        <motion.div
          className="mt-20 text-center backdrop-brightness-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {!isIframeLoaded && <div className="text-white">Loading playlist...</div>}
          <iframe
            style={{ borderRadius: "5rem" }}
            src="https://open.spotify.com/embed/playlist/71YbuOKr4nAzJq3XvkxAI9?utm_source=generator&theme=0"
            width="50%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mx-auto block"
            title="My Playlist"
            onLoad={() => setIsIframeLoaded(true)}
          />
        </motion.div>
      </div>
    </div>
  );
}
