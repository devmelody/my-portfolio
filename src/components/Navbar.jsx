import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //when I click on the button, show me the links
    <header>

    <nav className="text-white py-4">
      <div className="flex justify-between">
        <h1 class="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 transition-shadow duration-300 hover:drop-shadow-[0_0px_5px_rgba(168,85,247,0.7)]">
  melCamelCase
</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
        <ul className="hidden md:flex space-x-6">
          
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:bg-purple-500 border-purple-500 transition duration-300 p-1.5 px-6 border rounded-2xl ">
              Hire Me
            </NavLink>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full text-center w-64 bg-gray-800 transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="md:hidden p-4 fixed mt-4 right-0"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-6 h-0.5 bg-white mb-1 rotate-45 translate-y-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1 opacity-0"></div>
          <div className="w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5"></div>
        </button>

        <ul className="md:hidden mt-28 space-y-7">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 underline" : 'text-white'}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({isActive}) => `hover:text-purple-500 transition duration-300 ${isActive ? "text-purple-500 border-b-2 pb-1 border-b-purple-500" : 'text-white'}`}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:bg-purple-500 border-purple-500 transition duration-300 p-1.5 px-6 border rounded-2xl ">
              Hire Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}
export default Navbar;
