import { useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LayersIcon from "@mui/icons-material/Layers";
import WorkIcon from "@mui/icons-material/Work";

const App = () => {
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);

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
    <div className="bg-black text-white shadow-gray-950">
    <div className="loader">
      <img src="/assets/loading.svg" alt="Loading" className="w-50 h-50 mx-auto mt-[40vh]" />
    </div>

    {/* Sticky Navigation Bar */}
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md px-6 py-3 flex justify-center rounded-full shadow-lg">
  <div className="flex gap-6 items-center text-white text-2xl">
    <a href="#index" className="p-2 rounded-full hover:bg-red-600 transition-all duration-300">
      <HomeIcon sx={{ fontSize: 40 }} />
    </a>
    <a href="#about" className="p-2 rounded-full hover:bg-red-600 transition-all duration-300">
      <InfoIcon sx={{ fontSize: 40 }} />
    </a>
    <a href="#stack" className="p-2 rounded-full hover:bg-red-600 transition-all duration-300">
      <LayersIcon sx={{ fontSize: 40 }} />
    </a>
    <a href="#project" className="p-2 rounded-full hover:bg-red-600 transition-all duration-300">
      <WorkIcon sx={{ fontSize: 40 }} />
    </a>
  </div>
</div>
</div>
  );
}
      export default App;
