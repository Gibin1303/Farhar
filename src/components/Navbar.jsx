import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger (Menu) and close (X) icons
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "PROJECTS", "START PROJECT", "DASHBOARD"];
  const navigate = useNavigate()

  return (
    <nav className="bg-gradient-to-r from-black to-yellow-400 text-white shadow p-6 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-5xl font-bold capitalize">Crowdfunding</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-center">
          {navItems.map((item) => (
            <li
              key={item}
              className="text-md bg-[linear-gradient(to_right,black_10%,#facc15_85%)] 
               text-white px-4 py-2 rounded-full cursor-pointer 
               transition-transform duration-300 hover:scale-110 font-bold"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 rounded-full bg-black text-yellow-400 font-semibold hover:scale-105 transition">
            LOGIN
          </button>
          <button className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition">
            SIGN UP
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="text-md bg-[linear-gradient(to_right,black_10%,#facc15_85%)] 
               text-white px-4 py-2 rounded-full cursor-pointer 
               transition-transform duration-300 hover:scale-105 font-bold text-center"
            >
              {item}
            </div>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 rounded-full bg-black text-yellow-400 font-semibold hover:scale-105 transition" onClick={()=>navigate("/login")}>
              LOGIN
            </button>
            <button className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition">
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;