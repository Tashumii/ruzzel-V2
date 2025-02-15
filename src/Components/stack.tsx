export default function Stack() {
    const techLogos = {
      "Docker": "4/4e/Docker_%28container_engine%29_logo.svg",
      "VS Code": "9/9a/Visual_Studio_Code_1.35_icon.svg",
      "Figma": "3/33/Figma-logo.svg",
      "Python": "c/c3/Python-logo-notext.svg",
      "Node.js": "d/d9/Node.js_logo.svg",
      "Express.js": "6/64/Expressjs.png",
      "MongoDB": "9/93/MongoDB_Logo.svg",
      "PostgreSQL": "2/29/Postgresql_elephant.svg",
      "React.js": "a/a7/React-icon.svg",
      "TypeScript": "f/f5/Typescript.svg",
      "Next.js": "8/8e/Nextjs-logo.svg",
    };

    return (
      <div className="bg-[#000000] min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="container mx-auto py-16 px-8">
          <div className="text-center text-white mb-12">
            <section id="stack"></section>
            <h1 className="text-[6rem] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">
              STACK | TOOLS
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Frontend</h2>
              <ul className="space-y-2 text-white">
                <li className="text-2xl">React.js</li>
                <li className="text-2xl">TypeScript</li>
                <li className="text-2xl">Tailwind CSS</li>
                <li className="text-2xl">Next.js</li>
                <li className="text-2xl">HTML5/CSS3</li>
              </ul>
            </div>

            {/* Backend Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Backend</h2>
              <ul className="space-y-2 text-white">
                <li className="text-2xl">Node.js</li>
                <li className="text-2xl">Express.js</li>
                <li className="text-2xl">Python</li>
                <li className="text-2xl">MongoDB</li>
                <li className="text-2xl">PostgreSQL</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h3 className="text-4xl font-semibold mb-2 text-white">Primary Language</h3>
                <p className="text-2xl text-white">Python</p>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Tools</h2>
              <ul className="space-y-2 text-white">
                <li className="text-2xl">Git</li>
                <li className="text-2xl">Docker</li>
                <li className="text-2xl">VS Code</li>
                <li className="text-2xl">Postman</li>
                <li className="text-2xl">Figma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="slider w-full overflow-hidden py-10">
          <div className="slide-track flex items-center justify-center animate-scroll">
            {Object.keys(techLogos).map((tech, index) => (
              <div className="slide px-4" key={index}>
                <img
                  src={`https://upload.wikimedia.org/wikipedia/commons/${techLogos[tech]}`}
                  height="100"
                  width="250"
                  alt={tech}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
