import React from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500 text-3xl" />,
    link: "https://leetcode.com/u/its_shubham441/",
    username: "its_shubham441",
    stats: "350+ Problems Solved",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-700 text-3xl" />,
    link: "https://www.geeksforgeeks.org/user/kumarshubhaz3wn/",
    username: "kumarshubhaz3wn",
    stats: "100+ Problems Solved",
  },
];

export default function CodingProfiles() {
  return (
    <section className="py-20 bg-gray-900" id="coding">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-start text-white">
          Coding Profiles
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="relative bg-gray-800 bg-opacity-80 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 shadow-inner border">
                  {profile.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-400">@{profile.username}</p>
                  <span className="inline-block mt-2 text-xs px-3 py-1 bg-blue-900 text-blue-300 rounded-full font-semibold">
                    {profile.stats}
                  </span>
                </div>
              </div>

              <div className="mt-6 text-right">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-blue-400 border border-blue-500 px-4 py-1.5 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Visit Profile
                </a>
              </div>

              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300 to-green-400 animate-ping opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
