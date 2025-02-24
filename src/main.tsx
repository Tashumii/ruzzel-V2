import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./Components/about.tsx";
import Stack from "./Components/stack.tsx";
import Project from "./Components/project.tsx";
import Index from "./Components/index.tsx";
// import ComingSoon from "./Components/coming-soon.tsx";
import * as React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Index />
    <About />
    <Stack />
    <Project />
  </React.StrictMode>
);
