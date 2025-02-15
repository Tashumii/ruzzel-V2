export default function About() {
    return (
      <div className="bg-[#2e0a0a]">
        <div className="container mx-auto px-4 py-16">
          <section id="about" className="mb-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
              About Me
            </h2>
          </section>

          <div className="rounded-2xl  p-5 sm:p-7 backdrop-blur-sm drop-shadow-md">
            <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2">
              {/* About Me Section */}
              <div className="flex flex-col gap-6 rounded-lg  p-4 sm:p-6 drop-shadow-md">
                <p className="font-medium text-lg sm:text-xl md:text-4xl text-[#ac9d9d] text-justify leading-relaxed max-w-[40rem]">
                 Hi! I'm a passionate developer in the making, currently learning PostgreSQL and Python while working on projects to sharpen my skills.
                </p>
              </div>

              {/* Education Section */}
              <div className="flex flex-col gap-6 rounded-lg bg-[#030101] p-4 sm:p-6 drop-shadow-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">SCHOOL</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
