import { motion } from "framer-motion";

export default function About() {
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
          viewport={{ once: false }} // Only animate once
        >
          About Me
        </motion.h2>

        {/* Content Section */}
        <motion.div
          className="rounded-2xl p-5 sm:p-7 backdrop-blur-sm drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }} // Only animate once
        >
          <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              className="flex flex-col gap-6 rounded-lg p-4 sm:p-6 drop-shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }} // Only animate once
            >
              <p className="font-medium text-lg sm:text-xl md:text-4xl text-[#FFFFFF] text-justify leading-relaxed max-w-[40rem]">
                Hi! I'm a passionate developer, im currently learning PostgreSQL and Python while working on projects to sharpen my skills.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-8 bg-[#000000] p-6 rounded-lg border-2 border-[#FF1A1A] shadow-lg shadow-[#FF1A1A]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }} // Only animate once
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FF1A1A]">SCHOOL</h3>
              <div className="text-gray-300">
                <p className="font-semibold text-lg">Information Communication Technologies</p>
                <p className="text-gray-400">Tuy Senior High School</p>
                <p className="text-gray-400">2022 . 2024</p>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-lg pb-1.5">Bachelor of Science in Information Technology</p>
                <p className="text-gray-400 pb-1.5">Batangas State University ARASOF - Nasugbu</p>
                <p className="text-gray-400">2024 . Present</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Playlist Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }} // Only animate once
        >
          <h2 className="text-[6rem] font-bold mb-4 text-white pb-20 pt-30">My Playlist</h2>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/71YbuOKr4nAzJq3XvkxAI9?utm_source=generator&theme=0"
            width="50%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mx-auto block"
            title="My Playlist"
          />
        </motion.div>
      </div>
    </div>
  );
}
