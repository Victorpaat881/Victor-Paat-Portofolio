"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        hamburgerRef.current &&
        menuRef.current &&
        !hamburgerRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="top" className="container">
      <div className="relative flex items-center justify-between bg-gray-900">
        <div className="px-4">
          <a
            href="#home"
            className="block py-6 pl-0 lg:pl-8 text-lg font-bold text-white"
          >
            Victor Paat
          </a>
        </div>
        <div className="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            ref={hamburgerRef}
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute right-4 block lg:hidden ${isOpen ? "hamburger-active" : ""}`}
          >
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>

          <nav
            id="nav-menu"
            ref={menuRef}
            className={`${isOpen ? "block" : "hidden"} absolute right-4 top-full w-full max-w-62.5 rounded-lg bg-gray-900 py-5 pr-3 shadow-lg shadow-slate-600 lg:static lg:block lg:max-w-full lg:rounded-none lg:shadow-none`}
          >
            <ul className="block lg:flex">
              <li className="group">
                <a
                  href="#home"
                  className="mx-8 flex py-2 text-base hover:text-gray-300 text-white"
                >
                  Beranda
                </a>
              </li>
              <li className="group">
                <a
                  href="#about"
                  className="mx-8 flex py-2 text-base hover:text-gray-300 text-white"
                >
                  Tentang Saya
                </a>
              </li>
              <li className="group">
                <a
                  href="#skills"
                  className="mx-8 flex py-2 text-base hover:text-gray-300 text-white"
                >
                  Skills
                </a>
              </li>
              <li className="group">
                <a
                  href="#projects"
                  className="mx-8 flex py-2 text-base hover:text-gray-300 text-white"
                >
                  Projects
                </a>
              </li>
              <li className="group">
                <a
                  href="#contact"
                  className="mx-8 flex py-2 text-base hover:text-gray-300 text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
