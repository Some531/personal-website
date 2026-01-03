import { useEffect, useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import ContactCard from '../components/ContactCard';

export default function Home() {
  // Client-only stars to prevent hydration mismatch
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    setStars(Array.from({ length: 15 }));
    setShootingStars(Array.from({ length: 6 }));
  }, []);

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center starry-bg px-6">

        {/* Shooting stars */}
        <div className="shooting-stars">
          {shootingStars.map((_, i) => (
            <span key={i} className="shooting-star" />
          ))}
        </div>

        {/* Ambient stars */}
        <div className="ambient-stars">
          {stars.map((_, i) => (
            <span key={i} className="star" />
          ))}
        </div>

        {/* Content */}
        <h1 class="text-6xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
          Turning Ideas Into Reality
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-xl">
          Software & Math Enthusiast | Future Engineer & Thinker
        </p>

        <a
          href="#about-contact"
          className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold
          rounded-lg transition transform hover:scale-105 hover:bg-blue-600"
        >
          Learn More
        </a>
      </section>

      {/* About + Contact Section */}
      <section id="about-contact" className="relative overflow-hidden py-20 px-6 starry-bg justify-center text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="ambient-stars">
            {stars.map((_, i) => (
              <span key={i} className="star" />
            ))}
          </div>

          {/* About Me */}
          <div className="relative z-10 text-center md:text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
            <p className="text-slate-300 text-lg mb-4">
              I am a software and mathematics enthusiast with a passion for problem-solving,
              data science, and building impactful projects. Currently preparing to pursue
              dual degrees in Software and Computer Engineering and Mathematical Data Science.
            </p>
            <p className="text-slate-400 text-base">
              I enjoy turning complex ideas into simple, functional solutions and
              continuously learning about emerging technologies.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-blue-400">Contact Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <ContactCard title="GitHub" href="https://github.com/Some531" Icon={Github} />
              <ContactCard title="LinkedIn" href="https://www.linkedin.com/in/swornim-khatiwada-bb261726b/" Icon={Linkedin} />
              <ContactCard title="Instagram" href="https://www.instagram.com/swornimk531/" Icon={Instagram} />
              <ContactCard title="Email" href="mailto:swornimkhatiwada531@gmail.com" Icon={Mail} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative overflow-hidden py-20 px-6 starry-bg">
        <div className="ambient-stars">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="star" />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">Projects</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-800/60 rounded-xl p-6 shadow-md transition transform hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-white">Personal Finance Tracker</h3>
              <p className="text-slate-200 mb-4">Finance Tracker built with react, next.js, and supabase for multiple users and data entry input and data summary outputs.</p>
              <a href="https://github.com/Some531/finance-tracker" className="text-blue-400 hover:underline font-medium">View Project</a>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 shadow-md transition transform hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-white">Dataset Surprise</h3>
              <p className="text-slate-200 mb-4">To be revealed...</p>
              <a href="#" className="text-blue-400 hover:underline font-medium">View Project</a>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 shadow-md transition transform hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-white">More to Come...</h3>
              <p className="text-slate-200 mb-4">...N/A...</p>
              <a href="#" className="text-blue-400 hover:underline font-medium">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 text-sm starry-bg">
        &copy; 2026 Swornim Khatiwada. All rights reserved.
      </footer>
    </BaseLayout>
  );
}
