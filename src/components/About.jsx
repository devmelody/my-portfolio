import { useState } from "react";

function About() {
  const [activeBtn, setActiveBtn] = useState("about");

  return (
    <section>
      <div className="md:flex gap-2 justify-between mt-10  text-center">
        <div className="flex-col flex gap-3">
          <button
            onClick={() => setActiveBtn("about")}
            className={`hover:bg-purple-500 border border-gray-700 transition duration-300 p-1.5 px-6 md:w-80 md:border md:rounded ${
              activeBtn === "about" ? "bg-purple-600" : "bg-gray-800"
            }`}
          >
            About me
          </button>
          
          <button onClick={() => setActiveBtn("skills")} className={`hover:bg-purple-500 border border-gray-700 transition duration-300 p-1.5 px-6 mb-2 md:w-80 md:border md:rounded ${
              activeBtn === "skills" ? "bg-purple-600" : "bg-gray-800"
            }`}>
            My Skills
          </button>
        </div>

        {activeBtn === "about" && (
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 max-w-3xl">
            <p className="text-6xl text-red-500 font-bold">404</p>
            <p className="text-gray-400">Normal bio not found.</p>
            <p className="text-gray-500 mt-2">
              But hey 👋 I’m Melody, a frontend developer who loves React &
              Tailwind.
            </p>
            <p className="text-gray-500 mt-2">
              I specialize in <span className="text-purple-400">React</span> +{" "}
              <span className="text-purple-400">Tailwind</span>, and I have a
              love–hate relationship with CSS (mostly love).
            </p>
            <p className="text-gray-500 mt-2">
              When I’m not debugging layouts, I’m probably over-caffeinating or
              building some muscles🏋🏼‍♀️.
            </p>
            <p className="text-gray-500 mt-6 italic">
              ➜ You should check out my projects.
            </p>
          </div>
        )}
{/*SKILLS SECTION */}
        {activeBtn === "skills" && (
  <div className="grid grid-cols-2 md:grid-cols-3 p-6 rounded-lg border border-gray-700 bg-gray-800 max-w-3xl w-full gap-5 justify-between justify-items-center">
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      TailwindCSS
    </div>
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      JavaScript
    </div>
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      React
    </div>
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      Git
    </div>
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      GitHub
    </div>
    <div className="p-1 h-20 flex items-center justify-center w-full border border-gray-700 bg-gray-900 transform transition duration-300 hover:scale-95">
      VS Code
    </div>
  </div>
)}


      </div>
    </section>
  );
}
export default About;
