import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ theme, onToggleTheme }) => (
    <header className="site-nav fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-sm font-bold tracking-tight text-white transition hover:text-blue-400">
          SK<span className="text-blue-400">.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link
          to="/#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100 sm:px-5"
        >
          Get in touch
        </Link>
      </div>
      </nav>
    </header>
  );

export default Navbar;
