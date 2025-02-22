import { motion } from "framer-motion"; // Import motion from framer-motion
import Particles from "./Particles"; // Import Particles component
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CustomCursor from "./CustomCursor"; // Import CustomCursor component
import { useEffect, useState } from "react"; // Import useState and useEffect

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
    <div className="relative min-h-screen bg-[#000000] text-white flex items-center justify-center px-4">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Particles Background */}
      <div className="absolute inset-0 overflow-auto h-screen">
        <Particles
          particleCount={5000}
          particleSpread={10}
          speed={0.1}
          particleColors={["#FF1A1A"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={5}
          cameraDistance={2}
          disableRotation={false}
          className="pointer-events-none"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <section id="index"></section>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // Only animate once
          >
            <h1 className="animated-gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] lg:pl-[2rem]">
              <span className="gradient-overlay"></span>
              <a
                href="https://www.facebook.com/share/15voDKTz2p/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-content hover-effect" // Add hover-effect class
                style={{ WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Ric Ruzzel C. Badlis
              </a>
            </h1>

            {/* Typewriter Effect */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 p-4 sm:p-6">
              {text}
              <span className="blinking-cursor">|</span>
            </p>

            <p className="text-base sm:text-lg italic max-w-xl mx-auto lg:mx-0 text-gray-400 font-light leading-relaxed border-l-4 border-[#FF1A1A] pl-4 sm:pl-6">
              "Crafting elegant solutions through clean code and innovative design, one project at a time."
            </p>

            {/* Social Media Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-4 sm:pt-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }} // Only animate once
            >
              <span className="text-base sm:text-lg font-medium text-gray-300">
                Let's Connect:
              </span>
              <a
                href="https://github.com/Tashumii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform hover-effect" // Add hover-effect class
              >
                <GitHubIcon className="text-white hover:text-[#FF1A1A] text-2xl sm:text-3xl transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/ric-ruzzel-badlis-578a4434b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform hover-effect" // Add hover-effect class
              >
                <LinkedInIcon className="text-white hover:text-[#FF1A1A] text-2xl sm:text-3xl transition-colors duration-300" />
              </a>
              <a
                href="mailto:ruzzel672@gmail.com"
                className="hover:scale-110 transition-transform hover-effect" // Add hover-effect class
              >
                <EmailIcon className="text-white hover:text-[#FF1A1A] text-2xl sm:text-3xl transition-colors duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }} // Only animate once
          >
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#FF1A1A] blur-2xl rounded-4xl bg-transparent backdrop-blur-4xl"></div>
              <img
                src="/assets/ric.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-contain rounded-lg shadow-2xl shadow-[#FF1A1A]"
                style={{
                  filter: "contrast(1.1) brightness(0.95) saturate(1.50)",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
