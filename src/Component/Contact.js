import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 200);

    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ Please fill out all fields.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    setError("");

    emailjs
      .send(
        "service_af148ku",
        "template_vy9hrj9",
        formData,
        { publicKey: "qCLEJgkwmv7rzeBNe" }
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        () => {
          setError("❌ Failed to send message. Try again.");
          setTimeout(() => setError(""), 4000);
        }
      );
  };

  return (
    <section id="contact" className="relative bg-gray-950 text-white py-20 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        {/* Left Info Card */}
        <div className="md:w-1/2 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Let’s Talk
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            I'm open for collaborations, projects, and discussions.
            Drop a message anytime, and I'll get back to you as soon as possible!
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-purple-400">📧</span>
              <span className="break-all">kumarshubhamgupta478@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-purple-400">📞</span>
              <span>+91 705-096-9489</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-purple-400">📍</span>
              <span>Bihar, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a href="https://www.linkedin.com/in/shubhamkumar441/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a href="https://x.com/its_Shubham441" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a href="https://github.com/codezshubham" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a href="mailto:kumarshubhamgupta478@gmail.com">
              <HiOutlineMail className="text-3xl text-gray-400 hover:text-purple-400 transition" />
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="md:w-1/2 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Write your message..."
                onChange={handleChange}
                className="w-full p-3 h-32 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className={`w-full p-3 mt-4 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 ${isButtonClicked ? "scale-95" : "scale-100"
                }`}
            >
              🚀 Submit
            </button>
          </form>

          {isSubmitted && <p className="text-green-400 mt-4">✅ Message sent successfully!</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
