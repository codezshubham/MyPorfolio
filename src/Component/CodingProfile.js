import React from "react";
import { FaCalendarDay, FaFire, FaMedal } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import badge50Days2024 from "../Assest/50Days2024.png";
import badge50Days2025 from "../Assest/50Days2025.png";
import badge100Days2025 from "../Assest/100Days2025.png";

const leetCodeStats = {
  solved: 407,
  totalProblems: 4059,
  easy: { solved: 92, total: 966 },
  medium: { solved: 263, total: 2117 },
  hard: { solved: 52, total: 976 },
  contestRating: 1505,
  profileRank: 311265,
  contestsAttended: 4,
  badgesEarned: 3,
};

export default function LeetCodeJourney() {
  return (
    <section
      id="leetcode"
      className="section-surface leetcode-section relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="leetcode-header">
          <div>
          <h2 className="section-heading text-4xl md:text-6xl font-extrabold leading-tight">
            LeetCode <span className="section-heading-highlight leetcode-highlight">Journey</span>
          </h2>
          </div>
          <div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            Consistent problem solving, algorithmic thinking, and coding challenges that shaped my developer journey.
          </p>
          <p className="text-xs text-gray-500 mt-3 leetcode-sync">
            LeetCode stats last synced September 21, 2026
          </p>
          </div>

          {/* LeetCode badges */}
          <div className="leetcode-badges">
            {[
              { src: badge50Days2024, alt: "LeetCode 50 Days badge (2024)", label: "50 days · 2024" },
              { src: badge50Days2025, alt: "LeetCode 50 Days badge (2025)", label: "50 days · 2025" },
              { src: badge100Days2025, alt: "LeetCode 100 Days badge (2025)", label: "100 days · 2025" },
            ].map((badge) => (
              <div key={badge.alt} className="leetcode-badge">
                <div className="leetcode-badge-image-wrap">
                  <img src={badge.src} alt={badge.alt} loading="lazy" />
                </div>
                <div className="leetcode-badge-caption">
                  <span>LeetCode achievement</span>
                  <strong>{badge.label}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="leetcode-grid">
          {/* Stats Section */}
          <div className="leetcode-stats-column">
            <StatCard
              icon={<SiLeetcode className="text-yellow-400 text-2xl" />}
              label="Problems Solved"
              value={`${leetCodeStats.solved} / ${leetCodeStats.totalProblems}`}
              progress={(leetCodeStats.solved / leetCodeStats.totalProblems) * 100}
            />
            <StatCard
              icon={<MdOutlineLeaderboard className="text-purple-400 text-2xl" />}
              label="Contest Rating"
              value={leetCodeStats.contestRating.toLocaleString()}
            />
            <StatCard
              icon={<FaFire className="text-red-400 text-2xl" />}
              label="Max Streak"
              value="50 Days"
            />
            <StatCard
              icon={<FaCalendarDay className="text-green-400 text-2xl" />}
              label="Profile Ranking"
              value={`#${leetCodeStats.profileRank.toLocaleString()}`}
            />
            <StatCard
              icon={<FaMedal className="text-yellow-300 text-2xl" />}
              label="Badges Earned"
              value={leetCodeStats.badgesEarned}
            />
          </div>

          {/* Right Column */}
          <div className="leetcode-detail-column">
            {/* Difficulty Breakdown */}
            <div className="leetcode-panel">
              <h3 className="text-lg font-semibold text-white mb-4">
                Problem Difficulty Breakdown
              </h3>
              <ProgressRow label="Easy" value={leetCodeStats.easy.solved} max={leetCodeStats.easy.total} color="bg-green-400" />
              <ProgressRow label="Medium" value={leetCodeStats.medium.solved} max={leetCodeStats.medium.total} color="bg-yellow-400" />
              <ProgressRow label="Hard" value={leetCodeStats.hard.solved} max={leetCodeStats.hard.total} color="bg-red-400" />
            </div>

            {/* Achievements */}
            <div className="leetcode-panel">
              <h3 className="text-lg font-semibold text-white mb-4">
                Recent Achievements
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>🏆 100 Days Badge 2025</li>
                <li>⚡ 50 Days Badge 2025</li>
                <li>🏅 50 Days Badge 2024</li>
                <li>🧩 {leetCodeStats.contestsAttended} contests attended</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="leetcode-panel">
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
        <div className="leetcode-cta">
          <a
            href="https://leetcode.com/u/its_shubham441/"
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-profile-link"
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
    <div className="leetcode-stat">
      <div className="leetcode-stat-label">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <div className="leetcode-stat-value">{value}</div>
      {progress !== undefined && (
        <div className="leetcode-progress-track">
          <div
            className="leetcode-progress-fill"
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
    <div className="leetcode-progress-row">
      <div className="leetcode-progress-label">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">
          {value} / {max}
        </span>
      </div>
      <div className="leetcode-progress-track">
        <div className="leetcode-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
