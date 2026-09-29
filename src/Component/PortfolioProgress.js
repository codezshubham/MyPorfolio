import React, { useEffect, useState } from "react";
import image from "../Assest/ProfilePic.png";

export default function PortfolioProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollableHeight > 0 ? Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <aside className="portfolio-progress fixed right-4 top-28 bottom-24 z-40 hidden w-12 flex-col items-center md:flex" aria-label="Page reading progress">
      <div className="relative h-full w-px rounded-full bg-slate-700/70">
        <div className="absolute left-0 top-0 w-full rounded-full bg-blue-400 transition-all duration-150" style={{ height: `${progress}%` }} />
        <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ top: `${progress}%` }}>
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-950 bg-white shadow-lg">
            <img src={image} alt="Shubham Kumar" className="h-full w-full object-cover" />
          </div>
          <span className="rounded-md bg-slate-950 px-2 py-1 text-[10px] font-bold text-white shadow-lg">{progress}%</span>
        </div>
      </div>
    </aside>
  );
}
