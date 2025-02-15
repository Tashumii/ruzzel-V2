export default function Stack() {
    return (
      <div className="bg-[#2e0a0a] min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="container mx-auto py-16  ">
          <div className="text-center text-white mb-20">
            <section id="stack"></section>
            <h1 className="text-[6rem] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">
              STACK | TOOLS
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Section */}
            <div className="bg-[#000000] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Frontend</h2>
              <ul className="space-y-2 text--300">
                <li className="text-[#fd0a0a] text-2xl">React.js</li>
                <li className="text-[#fd0a0a] text-2xl">TypeScript</li>
                <li className="text-[#fd0a0a] text-2xl">Tailwind CSS</li>
                <li className="text-[#fd0a0a] text-2xl">Next.js</li>
                <li className="text-[#fd0a0a] text-2xl">HTML5/CSS3</li>
              </ul>
            </div>

            {/* Backend Section */}
            <div className="bg-[#000000] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Backend</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="text-[#fd0a0a] text-2xl">Node.js</li>
                <li className="text-[#fd0a0a] text-2xl">Express.js</li>
                <li className="text-[#fd0a0a] text-2xl">Python</li>
                <li className="text-[#fd0a0a] text-2xl">MongoDB</li>
                <li className="text-[#fd0a0a] text-2xl">PostgreSQL</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h3 className="text-4xl font-semibold mb-2 text-white">Primary Language</h3>
                <p className="text-[#fd0a0a] text-2xl">Python</p>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-[#000000] p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Tools</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="text-2xl text-[#fd0a0a]">Git</li>
                <li className="text-2xl text-[#fd0a0a]">Docker</li>
                <li className="text-2xl text-[#fd0a0a]">VS Code</li>
                <li className="text-2xl text-[#fd0a0a]">Postman</li>
                <li className="text-2xl text-[#fd0a0a]">Figma</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Slider Section */}
        <div className="slider w-full overflow-hidden py-10">
          <div className="slide-track flex items-center justify-center animate-scroll">
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" height="100" width="250" alt="Python" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="100" width="250" alt="Node.js" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="100" width="250" alt="JavaScript" />
            </div>
            <div className="slide px-4">
              <img src="/assets/typescript.png" height="100" width="250" />
            </div>
            <div className="slide px-4">
              <img src="/assets/html.png" height="100" width="250" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="100" width="250" alt="Node.js" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" height="100" width="250" alt="Python" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="100" width="250" alt="JavaScript" />
            </div>
            <div className="slide px-4">
              <img src="/assets/typescript.png" height="100" width="250" />
            </div>
            <div className="slide px-4">
              <img src="/assets/html.png" height="100" width="250" />
            </div>
            <div className="slide px-4">
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="100" width="250" alt="JavaScript" />
            </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="100" width="250" alt="Node.js" />
            </div>
            <div className="slide px-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="100" width="250" alt="JavaScript" />
            </div>
            <div className="slide px-4">
              <img src="/assets/figma.png" height="100" width="250" />
            </div>
          </div>
        </div>

      </div>
    );
  }
