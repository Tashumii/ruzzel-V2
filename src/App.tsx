import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle, FaLayerGroup, FaBriefcase } from "react-icons/fa";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila",
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lastX.current !== null && lastY.current !== null) {
        const line = document.createElement("div");
        line.classList.add("cursor-line");

        const x1 = lastX.current;
        const y1 = lastY.current;
        const x2 = e.pageX;
        const y2 = e.pageY;

        const distance = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        line.style.width = `${distance}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;

        document.body.appendChild(line);

        setTimeout(() => {
          line.style.opacity = "0";
          setTimeout(() => {
            line.remove();
          }, 500);
        }, 50);
      }

      lastX.current = e.pageX;
      lastY.current = e.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#2e0a0a] text-white shadow-gray-950">
      {/* Navigation Bar */}
      <div className="fixed top-4 left-4 z-50 flex items-center justify-between w-full px-6">
        {/* Hamburger Menu Button */}
        <button
          className="bg-black/50 backdrop-blur-md p-3 rounded-lg shadow-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={40} className="text-white" />
        </button>

        {/* Philippine Time Display */}
        <div className="fixed top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg shadow-lg text-white text-lg">
          {time}
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 bg-black/80 p-4 rounded-lg shadow-lg flex flex-col gap-4 transition-all duration-300">
            <a href="#index" className="group relative p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
              <AiFillHome size={30} />
              <span className="text-white text-lg">Home</span>
            </a>
            <a href="#about" className="group relative p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
              <FaInfoCircle size={30} />
              <span className="text-white text-lg">About</span>
            </a>
            <a href="#stack" className="group relative p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
              <FaLayerGroup size={30} />
              <span className="text-white text-lg">Stack</span>
            </a>
            <a href="#project" className="group relative p-2 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
              <FaBriefcase size={30} />
              <span className="text-white text-lg">Projects</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
