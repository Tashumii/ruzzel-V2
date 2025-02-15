import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Particles from "./Particles"

export default function About() {
  return (

    <div className="relative min-h-screen bg-black text-white flex items-center justify-center  px-4 ">
      {/* Floating particles Background */}
      <div className="absolute inset-0 overflow-auto h-screen">
 <Particles
     particleCount={5000}
     particleSpread={10}
     speed={0.1}
     particleColors={["#452753"]}
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

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[25rem] pt-[5rem]">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
             {/* Animated Gradient Text */}
             <h1 id="index" className="animated-gradient-text text-[5rem] lg:pl-[2rem]">

                <span className="gradient-overlay"></span>
            <a
                 href="https://www.facebook.com/share/15voDKTz2p/"
                 target="_blank"
                rel="noopener noreferrer"
                 className="text-content"
                    >
                     Ric Ruzzel C. Badlis
                     </a>
                    </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent p-8">
              Welcome To My Portfolio
            </p>
            <p className="text-lg sm:text-xl italic max-w-xl mx-auto lg:mx-0 text-gray-400 font-light leading-relaxed border-l-4 border-[#4190d9] pl-6 ">
              "Crafting elegant solutions through clean code and innovative
              design, one project at a time."
            </p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-6 pr-">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#071e2c] to-[#2c013a8e] blur-2xl rounded-4xl bg-transparent backdrop-blur-4xl"></div>
              <img
                src="/assets/ric.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-contain rounded-lg shadow-2xl shadow-purple-950"
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
