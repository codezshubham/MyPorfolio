import React from "react";
import { FaCalendarDay, FaFire, FaMedal } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

export default function LeetCodeJourney() {
  return (
    <section
      id="leetcode"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute right-1/3 top-1/3 w-64 h-64 rounded-full blur-3xl bg-blue-500/20 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              LeetCode Journey
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Consistent problem solving, algorithmic thinking, and coding challenges that shaped my developer journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Stats Section */}
          <div className="space-y-6">
            <StatCard
              icon={<SiLeetcode className="text-yellow-400 text-2xl" />}
              label="Problems Solved"
              value="380+ / 3677"
              progress={35}
            />
            <StatCard
              icon={<MdOutlineLeaderboard className="text-purple-400 text-2xl" />}
              label="Contest Rating"
              value="1412"
            />
            <StatCard
              icon={<FaFire className="text-red-400 text-2xl" />}
              label="Max Streak"
              value="50 Days"
            />
            <StatCard
              icon={<FaCalendarDay className="text-green-400 text-2xl" />}
              label="Active Days"
              value="200+"
            />
            <StatCard
              icon={<FaMedal className="text-yellow-300 text-2xl" />}
              label="Badges Earned"
              value="3"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Difficulty Breakdown */}
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Problem Difficulty Breakdown
              </h3>
              <ProgressRow label="Easy" value={90} max={900} color="bg-green-400" />
              <ProgressRow label="Medium" value={250} max={1915} color="bg-yellow-400" />
              <ProgressRow label="Hard" value={50} max={900} color="bg-red-400" />
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Recent Achievements
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>🏆 Monthly Challenge Badge - Sept 2025</li>
                <li>⚡ 50-Day Streak Achievement</li>
                <li>🥇 Contest Rating 1400+ Milestone</li>
                <li>📘 380+ Problems Solved</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Top Problem Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dynamic Programming",
                  "Graphs",
                  "Binary Search",
                  "Arrays",
                  "Trees",
                ].map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://leetcode.com/u/its_shubham441/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-transform"
          >
            <SiLeetcode className="text-lg" />
            View LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------- Sub Components ------- */
function StatCard({ icon, label, value, progress }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
      <div className="flex items-center gap-3 text-white mb-2">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {progress !== undefined && (
        <div className="w-full h-2 rounded-full bg-gray-700 mt-2">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

function ProgressRow({ label, value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">
          {value} / {max}
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-700 overflow-hidden">
        <div className={`h-2 ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
