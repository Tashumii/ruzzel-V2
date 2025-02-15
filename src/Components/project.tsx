
export default function Project() {
  return (

    <div className="bg-[#000000]">
    <section id="project"></section>
      <div className="container mx-auto  py-16">
        <h2 className="mb-8  px-[34rem] font-extrabold text-white text-[6rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          PROJECT
        </h2>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-black ">
          <div className="flex flex-col items-center md:items-start gap-8 bg-[#1a1a1a] p-6 rounded-lg">
            <a href="https://github.com/Tashumii/TTS_GUI" className="text-2xl font-medium text-amber-50 hover:text-red-400 transition-colors">
              Text To Speech
            </a>
            <span className="font-medium text-gray-700">
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
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 bg-[#1a1a1a] p-6 rounded-lg">
            <span className="text-2xl font-medium text-amber-50 pt-5.5">
              Processing...
            </span>
            <span className="font-medium text-gray-700">
              "Enhancing My Portfolio" – Showcasing my skills, projects, and
              experience through continuous improvement and strategic updates to
              create a stronger professional presence.
            </span>
            <span className="flex gap-2 font-medium text-gray-400 pb-.5">
              <span>Status</span>
              <span>·</span>
              <span>2025</span>
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 bg-[#1a1a1a] p-6 rounded-lg">
            <span className="text-2xl font-medium text-amber-50">
              Planning...
            </span>
            <span className="font-medium text-gray-700">
              Planning to build a simple habit tracker that helps users log
              activities, set goals, and track progress with a clean and
              intuitive interface.
            </span>
            <span className="flex gap-2 font-medium text-gray-400 ">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 bg-[#1a1a1a] p-6 rounded-lg">
            <span className="text-2xl font-medium text-amber-50">
              Too be soon...
            </span>
            <span className="font-medium text-gray-700">
              "I Want to Build a Social Media Application or AI" – A future
              project aimed at enhancing my skills and fostering collaboration,
              exploring innovative technologies to create impactful digital
              experiences.
            </span>
            <span className="flex gap-2 font-medium text-gray-400 pb-8.5">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
