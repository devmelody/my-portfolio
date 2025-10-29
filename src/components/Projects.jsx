import { useState } from "react";

const projects = [
  {
    title: "Cloud9ja",
    img: "cloud9ja.png",
    description:
      "A weather app that doesn’t ghost you. Real-time updates, clean UI, and zero small talk about humidity.",
    tech: "React, TailwindCSS, Zustand, Axios, REST-APIs",
    demo: "https://cloud9ja-weather.vercel.app/",
    github: "https://github.com/devmelody/cloud9ja-weather",
  },
  {
  title: "Rencar",
  img: "rencar.png",
  description:
    "A collaborative hackathon project — Rencar makes renting and sharing cars as easy as ordering coffee. Built with a full-stack setup to handle listings, bookings, and user authentication smoothly.",
  tech: "React, Python, Express, PostgreSQL, TailwindCSS",
  demo: "https://carltd.netlify.app",
  github: "https://github.com/teamairbnb",
},

];

function Projects() {
  const [change, setChange] = useState(0);

  const handlePrevious = () => {
    setChange((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setChange((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const project = projects[change];
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 gap-10 border-b-2 pb-6 border-gray-600 mt-5 items-center relative">
        <div className="relative max-w-md">
          <img
            src={project.img}
            alt={project.title}
            className="rounded-lg shadow-lg shadow-gray-700 bg-gray-800 "
          />
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 bg-gray-700 p-2"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 bg-gray-700 p-2"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div>
          <h1 className="text-purple-500 text-3xl">{project.title}</h1>
          <p className="mt-6 mb-6">{project.description}</p>
          <p className="text-purple-500 text-lg">{project.tech}</p>
        </div>
      </div>
      <div className="mt-8 flex gap-8">
        <a
          href={project.demo}
          target="_blank"
    rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-gray-500 border border-purple-500 text-white rounded-full hover:bg-purple-500 transition duration-300"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href={project.github}
          target="_blank"
    rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-gray-500 border border-purple-500 text-white text-2xl rounded-full hover:bg-purple-500 transition duration-300"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}
export default Projects;
