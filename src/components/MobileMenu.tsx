import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menú Móvil */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#1E2952] border-l border-[#1B4B7F]/20 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <a
            href="/"
            className="text-white hover:text-[#48A3B5] py-3 px-4 rounded-lg hover:bg-[#1B4B7F] transition-colors duration-200"
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            href="/#projects"
            className="text-white hover:text-[#48A3B5] py-3 px-4 rounded-lg hover:bg-[#1B4B7F] transition-colors duration-200"
            onClick={toggleMenu}
          >
            Proyectos
          </a>
          <a
            href="/#about"
            className="text-white hover:text-[#48A3B5] py-3 px-4 rounded-lg hover:bg-[#1B4B7F] transition-colors duration-200"
            onClick={toggleMenu}
          >
            Sobre mi
          </a>
          <a
            href="/#contact"
            className="text-white hover:text-[#48A3B5] py-3 px-4 rounded-lg hover:bg-[#1B4B7F] transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contacto
          </a>
        </nav>
      </div>
    </>
  );
}
