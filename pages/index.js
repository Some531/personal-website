import { useEffect, useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import ContactCard from '../components/ContactCard';

const TABS = ['About', 'Projects', 'Skills', 'Experience', 'Journey'];

export default function Home() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [activeTab, setActiveTab] = useState('About');

  useEffect(() => {
    setStars(Array.from({ length: 15 }));
    setShootingStars(Array.from({ length: 6 }));
  }, []);

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center starry-bg px-6">
        <div className="shooting-stars">
          {shootingStars.map((_, i) => (
            <span key={i} className="shooting-star" />
          ))}
        </div>

        <div className="ambient-stars">
          {stars.map((_, i) => (
            <span key={i} className="star" />
          ))}
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-3 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
          Turning Ideas Into Reality
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl">
          Software & Math Enthusiast | Future Engineer & Thinker
        </p>

        <button
          onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold
          rounded-lg transition transform hover:scale-105 hover:bg-blue-600"
        >
          Who is Swornim Khatiwada?
        </button>
      </section>

      {/* Content Section */}
      <section
        id="content"
        className="relative overflow-hidden py-20 px-6 starry-bg text-center"
      >
        <div className="ambient-stars">
          {stars.map((_, i) => (
            <span key={i} className="star" />
          ))}
        </div>

        {/* Menu Tabs */}
        <div className="relative z-10 flex justify-center gap-8 mb-16 flex-wrap">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold transition
                ${activeTab === tab
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative z-10 max-w-6xl mx-auto">

          {activeTab === 'About' && (
            <>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
              <p className="text-slate-300 text-lg mb-4 max-w-3xl mx-auto">
                I am a software and mathematics enthusiast with a passion for problem-solving,
                data science, and building impactful projects. Currently preparing to pursue
                dual degrees in Software and Computer Engineering and Mathematical Data Science.
              </p>
              <p className="text-slate-300 mb-12 max-w-3xl mx-auto">
                I enjoy turning complex ideas into simple, functional solutions and
                continuously learning about emerging technologies.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center w-fit mx-auto">
                <ContactCard title="GitHub" href="https://github.com/Some531" Icon={Github} />
                <ContactCard title="LinkedIn" href="https://www.linkedin.com/in/swornim-khatiwada-bb261726b/" Icon={Linkedin} />
                <ContactCard title="Instagram" href="https://www.instagram.com/swornimk531/" Icon={Instagram} />
                <ContactCard title="Email" href="mailto:swornimkhatiwada531@gmail.com" Icon={Mail} />
              </div>
            </>
          )}

          {activeTab === 'Projects' && (
            <>
              <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-slate-800/60 rounded-xl p-6 shadow-md hover:-translate-y-1 transition">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Personal Finance Tracker
                  </h3>
                  <p className="text-slate-200 mb-4">
                    React, Next.js, Supabase — multi-user finance tracking and summaries.
                  </p>
                  <a
                    href="https://github.com/Some531/finance-tracker"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-2">2D Linear Algebra Visualiser</h3>
                  <p className="text-slate-200 mb-4">Next.js, Typescript, Canvas — Visualisation tool for 2D vectors and linear algebra.</p>
                  <a
                    href="https://github.com/Some531/2d-linear-algebra-visualiser"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>

                </div>

                <div className="bg-slate-800/60 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-2">Dataset Surprise</h3>
                  <p className="text-slate-200">To be revealed...</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Skills' && (
            <>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Skills</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                JavaScript · React · Next.js · Python · Git · SQL · Mathematical Modelling ·
                Statistics · Problem Solving · Algorithms
              </p>
            </>
          )}

          {activeTab === 'Experience' && (
            <>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Experience</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                University-level projects, independent software development,
                tutoring, and continuous self-directed learning.
              </p>
            </>
          )}

          {activeTab === 'Journey' && (
            <>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Journey</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                From high-achieving mathematics and science student to aspiring
                engineer, focused on building strong foundations and meaningful work.
              </p>
            </>
          )}
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 text-sm starry-bg">
        &copy; 2026 Swornim Khatiwada. All rights reserved.
      </footer>
    </BaseLayout>
  );
}
