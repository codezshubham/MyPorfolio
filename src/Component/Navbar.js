import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import image from "../Assest/ProfilePic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About", to: "/#about" },
    { name: "Skills", to: "/#skills" },
    { name: "Experiences", to: "/#experience" },
    { name: "Coding", to: "/codingProfile" },
    { name: "Projects", to: "/projects" },
    { name: "Certifications", to: "/certifications" },
    { name: "Contact", to: "/#contact" },
  ];

  const isActive = (path) => {
    const [pathname, hash] = path.split("#");

    // Route match for normal pages
    if (!hash) {
      return location.pathname === pathname;
    }

    // Hash route match for sections like /#about
    return (
      location.pathname === pathname && window.location.hash === `#${hash}`
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Profile */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="h-11 w-11 rounded-full border border-pink-500/70 object-cover shadow-lg transition duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Portfolio</p>
            <p className="text-xs text-slate-400">Software Developer</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/10 hover:text-white hover:backdrop-blur-md"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={[
          "md:hidden absolute left-0 right-0 top-full",
          "border-t border-white/10 bg-slate-950/95 backdrop-blur-xl",
          "transition-all duration-200",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="px-4 py-4">
          <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
