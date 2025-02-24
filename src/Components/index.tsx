import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CustomCursor from "./CustomCursor";

// Lazy load Particles for better performance
const Particles = lazy(() => import("./Particles"));

export default function Index() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = [
    "Welcome To My Portfolio",
    "Crafting Elegant Solutions",
    "Innovative Design & Clean Code",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentMessage = messages[loopNum % messages.length];
      setText(
        isDeleting
          ? currentMessage.substring(0, text.length - 1)
          : currentMessage.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white flex items-center justify-center px-6">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Suspense fallback={null}>
          <Particles
            particleCount={3000} // Reduced for better performance
            particleSpread={10}
            speed={0.1}
            particleColors={["#FF1A1A", "#FF6B6B", "#FFFFFF"]} // Added color variation
            moveParticlesOnHover={true}
            className="pointer-events-none"
          />
        </Suspense>
      </div>

      {/* Magazine Header */}
      <div className="container mx-auto relative z-[20rem] text-center pt-[1rem]">
        <section id="index" className="pt-20"></section>

        {/* Name with Gradient Effect */}
        <motion.h1
          className="text-[3rem] md:text-[5rem] font-extrabold uppercase tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-content">Ric Ruzzel C. Badlis</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 italic mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Exploring the boundaries of technology, one line of code at a time."
        </motion.p>

        {/* Typing Animation */}
        <motion.h2
          className="text-[2rem] md:text-[3rem] text-[#ffffff] font-bold mt-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text} <span className="blinking-cursor">|</span>
        </motion.h2>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center mt-10 "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/ric.jpg"
            alt="Profile"
            className="w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] object-cover rounded-full  shadow-lg saturate-150 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center gap-6 mt-8 text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { icon: <GitHubIcon />, link: "https://github.com/Tashumii", label: "GitHub Profile" },
            { icon: <LinkedInIcon />, link: "https://linkedin.com/in/ric-ruzzel-badlis-578a4434b", label: "LinkedIn Profile" },
            { icon: <EmailIcon />, link: "mailto:ruzzel672@gmail.com", label: "Email Me" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-white hover:text-[#FF1A1A] transition-colors duration-300 p-2  "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
