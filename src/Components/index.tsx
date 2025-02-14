import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function About() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center  px-4 ">
      {/* Floating Triangles Background */}
      <div className="absolute inset-0 overflow-hidden =h-screen">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="triangle animate-float"
            style={{
              position: "fixed",
              left: `${Math.random() * 200 - 50}%`,
              top: `${Math.random() * 200 - 50}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              width: "1",
              height: "2",
              borderLeft: `${Math.random() * 15 + 5}px solid transparent`,
              borderRight: `${Math.random() * 15 + 5}px solid transparent`,
              borderBottom: `${Math.random() * 20 + 10}px solid rgba(147, 51, 234, ${Math.random() * 0.5 + 0.1})`,
              opacity: Math.random() * 0.6 + 0.1,
              transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * -150}px)`,
              filter: `drop-shadow(0 0 ${Math.random() * 3 + 1}px rgba(147, 51, 234, 0.4))`,
              transition: "transform 0.1s ease-in-out",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[25rem] pt-[5rem]">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#c2b4b4bd] via-[#615757] to-[#c4b7b760] drop-shadow-md ">
             <section id="index">
                Ric Ruzzel C. Badlis
            </section>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Welcome To My Portfolio
            </p>
            <p className="text-lg sm:text-xl italic max-w-xl mx-auto lg:mx-0 text-gray-400 font-light leading-relaxed border-l-4 border-[#4190d9] pl-4">
              "Crafting elegant solutions through clean code and innovative
              design, one project at a time."
            </p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
              <span className="text-lg sm:text-xl font-medium text-gray-300">
                Let's Connect:
              </span>
              <a
                href="https://github.com/Tashumii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <GitHubIcon className="text-white hover:text-[#FF1A1A] text-3xl sm:text-4xl transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/ric-ruzzel-badlis-578a4434b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <LinkedInIcon className="text-white hover:text-[#FF1A1A] text-3xl sm:text-4xl transition-colors duration-300" />
              </a>
              <a
                href="mailto:ruzzel672@gmail.com"
                className="hover:scale-110 transition-transform"
              >
                <EmailIcon className="text-white hover:text-[#FF1A1A] text-3xl sm:text-4xl transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#123b5391] to-[#23072c8e] blur-2xl rounded-4xl"></div>
              <img
                src="/assets/ric.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-contain rounded-lg shadow-2xl shadow-red-900/30"
                style={{
                  filter: "contrast(1.1) brightness(0.95) saturate(1.50)",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
