import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Arrow = ({ direction = "left" }) => (
  <svg viewBox="0 0 100 70" className={`contact-arrow ${direction === "right" ? "scale-x-[-1]" : ""}`} aria-hidden="true">
    <path d="M12 10 Q 72 16, 76 54" />
    <path d="M61 43 L 76 54 L 91 39" />
  </svg>
);

const Contact = () => (
  <section id="contact" className="section-surface contact-section relative overflow-hidden bg-black px-6 py-28 text-white md:py-36">
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <h2 className="contact-heading section-heading text-4xl font-extrabold md:text-6xl">
        <span className="section-heading-highlight">Contact</span>
      </h2>
      <h3 className="contact-subheading text-5xl font-bold tracking-tight md:text-6xl">
        Let&apos;s work together.
      </h3>
      <p className="contact-description mx-auto mt-8 max-w-xl text-lg leading-relaxed">
        I&apos;m open to discussing a project, a new opportunity, or simply swapping ideas about building great software.
      </p>

      <div className="relative mt-24 flex flex-col items-center justify-center gap-16 sm:flex-row sm:gap-7">
        <div className="relative flex flex-col items-center">
          <div className="contact-callout contact-callout-left">
            <span>Coffee is on me!</span>
            <Arrow />
          </div>
          <a
            href="mailto:kumarshubhamgupta478@gmail.com?subject=Portfolio%20conversation"
            className="contact-action contact-action-primary"
          >
            <HiOutlineMail className="text-xl" /> Start a conversation
          </a>
        </div>

        <span className="hidden font-serif text-xl italic text-slate-600 sm:block">or</span>

        <div className="relative flex flex-col items-center">
          <div className="contact-callout contact-callout-right">
            <span>Give me a call!</span>
            <Arrow direction="right" />
          </div>
          <a href="tel:+917050969489" className="contact-action contact-action-secondary">
            <HiOutlinePhone className="text-xl" /> Call me
          </a>
        </div>
      </div>

      <div className="contact-socials mt-20 border-t pt-10">
        <p className="contact-socials-label mb-5 text-xs font-black uppercase tracking-[0.28em]">Find me online</p>
        <div className="flex justify-center gap-3">
          <a href="https://github.com/codezshubham" target="_blank" rel="noreferrer" aria-label="GitHub" className="contact-social"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shubhamkumar441/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="contact-social"><FaLinkedin /></a>
          <a href="https://x.com/its_Shubham441" target="_blank" rel="noreferrer" aria-label="X" className="contact-social"><FaTwitter /></a>
          <a href="mailto:kumarshubhamgupta478@gmail.com" aria-label="Email" className="contact-social"><HiOutlineMail /></a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
