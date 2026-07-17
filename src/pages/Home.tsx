import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ShieldCheck, Cpu, Wrench,
  ChevronDown, BatteryCharging, Zap, Sun, Target, Eye
} from 'lucide-react';


export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);


  const faqs = [
    { q: 'What safety standards do your battery packs conform to?', a: 'All Revonix battery packs integrate multi-layered protection including cell-level fuses, smart BMS, high-efficiency thermal barriers, and custom alloy enclosures designed to withstand shock and dust (up to IP67).' },
    { q: 'Can you customize battery dimensions and voltages?', a: 'Yes, that is our core specialty. We engineer custom configurations ranging from 12V to 96V (and beyond for stationary storage) to match specific forklift chassis, AGVs, electric scooters, or grid configurations.' },
    { q: 'What is the lifespan of your LiFePO4 cells?', a: 'Our grade-A LiFePO4 cells are rated for over 6,000 charge-discharge cycles at 80% Depth of Discharge, which translates to a service life of 15 to 20 years of daily operation.' },
    { q: 'Do you offer integration support for inverters and chargers?', a: 'Yes. We supply fully calibrated systems. Our solar battery storage solutions are pre-programmed to sync with hybrid solar inverters, and our chargers communicate via OCPP for smart energy management.' }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradients & Power Grid Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full dark:radial-grid-dark radial-grid-light" />

        {/* Animated Power Grid */}
        <svg className="absolute inset-0 w-full h-full text-primary/10 dark:text-primary/15 opacity-60 dark:opacity-50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/5 dark:text-white/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Moving circuits and busbars */}
          <g className="stroke-primary/20 dark:stroke-primary/30 stroke-[1.5] fill-none">
            <path d="M -100 250 L 500 250 L 600 350 L 1200 350 L 1300 200 L 2000 200" />
            <path d="M 200 100 L 250 250" />
            <path d="M 600 350 L 650 500 L 900 500" />
            <path d="M 1200 350 L 1250 500" />
          </g>

          {/* Glowing junction nodes */}
          <g className="fill-primary/20 dark:fill-primary/30 stroke-primary stroke-2">
            <circle cx="500" cy="250" r="5" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="500" cy="250" r="3.5" />

            <circle cx="600" cy="350" r="5" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="600" cy="350" r="3.5" />

            <circle cx="1200" cy="350" r="5" className="animate-ping" style={{ animationDuration: '5s' }} />
            <circle cx="1200" cy="350" r="3.5" />
          </g>

          {/* Electric power pulses flowing */}
          <circle cx="0" cy="0" r="3" className="fill-accent">
            <animateMotion
              path="M -100 250 L 500 250 L 600 350 L 1200 350 L 1300 200 L 2000 200"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" r="2.5" className="fill-primary">
            <animateMotion
              path="M 600 350 L 650 500 L 900 500"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-32 md:pt-56 md:pb-48 min-h-[92vh] max-w-7xl mx-auto px-6 z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-6 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-6xl md:text-9xl text-secondary dark:text-white leading-[1.05] tracking-tight pb-2"
          >
            Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Revonix</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-2xl text-secondary/70 dark:text-white/70 leading-relaxed max-w-4xl mx-auto"
          >
            We specialize in engineering advanced lithium battery packs, solar energy storage integrations, and smart charging networks. Custom solutions optimized for industrial, commercial, and residential applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <Link
              to="/products"
              className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-base rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATISTICS BANNER */}
      {/* ABOUT OUR INNOVATIONS SECTION */}
      <section className="relative py-28 md:py-36 max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-secondary dark:text-white tracking-tight leading-tight">
              Fueling a Smarter, Self-Powered India.
              <span className="block text-primary text-2xl md:text-3xl font-semibold mt-2">About Our Innovations</span>
            </h2>
            <p className="text-base md:text-xl text-secondary/70 dark:text-white/70 leading-relaxed mt-2">
              At Revonix Technologies, we are redefining energy innovation through the development of intelligent battery systems, AI-integrated management platforms, and modular storage technologies. Our solutions are designed to adapt to diverse use-cases — from solar-powered homes to electric mobility and smart infrastructure. With a strong focus on performance, safety, and real-world scalability, we combine deep engineering expertise with future-ready technology to create sustainable energy systems built for long-term impact.
            </p>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-6 flex flex-col gap-8 w-full">
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.08, ease: 'easeOut' as any }}
              className="p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col gap-5 group text-left"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl md:text-2xl text-secondary dark:text-white transition-colors group-hover:text-primary">Our Mission</h4>
              </div>
              <p className="text-lg text-secondary/70 dark:text-white/60 leading-relaxed">
                To deliver intelligent, reliable, and future-ready battery packs that accelerate India’s transition to clean, independent energy — across homes, mobility, and industries.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.08, ease: 'easeOut' as any }}
              className="p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col gap-4 group text-left"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl md:text-2xl text-secondary dark:text-white transition-colors group-hover:text-accent">Our Vision</h4>
              </div>
              <p className="text-lg text-secondary/70 dark:text-white/60 leading-relaxed">
                To lead the transformation toward a self-powered, energy-resilient world by developing smart, scalable, and sustainable energy technologies that empower every individual and enterprise.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* OUR SOLUTIONS MODULE */}
      <section className="relative py-28 md:py-36 bg-secondary/5 dark:bg-[#0F172A]/10 border-y border-[#0F172A]/5 dark:border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col gap-4 mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Solution</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-secondary dark:text-white tracking-tight">
              We Are Providing Best<br />Energy Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BatteryCharging className="w-6 h-6" />,
                title: "Custom Lithium Battery Pack Assembly",
                desc: "Tailor-made battery packs for solar, EV, UPS, and industrial applications and more.",
                color: "bg-primary/10 text-primary group-hover:text-primary"
              },
              {
                icon: <Sun className="w-6 h-6" />,
                title: "Hybrid Solar + Battery Backup Systems",
                desc: "Integrated energy systems combining solar generation with intelligent storage and backup.",
                color: "bg-accent/10 text-accent group-hover:text-accent"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "UPS and Emergency Power Backup Systems",
                desc: "Customizable backup systems for critical loads in homes, hospitals, and small industries.",
                color: "bg-amber-500/10 text-amber-500 group-hover:text-amber-500"
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "AI-Based Battery Management Systems",
                desc: "Intelligent battery monitoring and control systems for optimized safety, performance, and lifespan.",
                color: "bg-indigo-500/10 text-indigo-500 group-hover:text-indigo-500"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "EV Battery Packs & Charging Solutions",
                desc: "High-performance battery packs for electric vehicles and two-wheelers with future-ready BMS.",
                color: "bg-emerald-500/10 text-emerald-500 group-hover:text-emerald-500"
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Off-Grid and Microgrid Energy Solutions",
                desc: "Reliable, self-powered systems for rural and remote locations without grid connectivity.",
                color: "bg-violet-500/10 text-violet-500 group-hover:text-violet-500"
              }
            ].map((sol, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.08, ease: 'easeOut' as any }}
                className="p-8 md:p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col gap-5 group"
              >
                {/* Header: Icon beside Title */}
                <div className="flex items-center gap-3.5 w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${sol.color}`}>
                    {sol.icon}
                  </div>
                  <h3 className={`font-bold text-lg md:text-xl text-secondary dark:text-white transition-colors ${sol.color.split(' ')[2]}`}>
                    {sol.title}
                  </h3>
                </div>

                {/* Subtext: Centered below */}
                <p className="text-base md:text-lg text-secondary/70 dark:text-white/60 leading-relaxed text-center w-full mt-1 px-1">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - 3 COLUMN LAYOUT */}
      <section className="relative py-32 md:py-44 max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (3 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-8 w-full order-2 lg:order-1">
            {[
              {
                icon: <Cpu className="w-5 h-5" />,
                title: "Smart, Modular Energy Systems",
                desc: "Tailored for real-world use.",
                color: "bg-primary/10 text-primary group-hover:text-primary"
              },
              {
                icon: <Sun className="w-5 h-5" />,
                title: "Renewable & Storage Focus",
                desc: "Solar + advanced lithium tech.",
                color: "bg-accent/10 text-accent group-hover:text-accent"
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Made in India",
                desc: "Built for Indian conditions.",
                color: "bg-amber-500/10 text-amber-500 group-hover:text-amber-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.08, ease: 'easeOut' as any }}
                className="p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col gap-4 justify-between min-h-[195px] group text-left"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className={`font-bold text-xl md:text-2xl text-secondary dark:text-white transition-colors ${item.color.split(' ')[2]}`}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-lg text-secondary/70 dark:text-white/60 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Middle Column (Section Header) */}
          <div className="lg:col-span-4 flex flex-col gap-2 text-center items-center justify-center py-6 lg:py-0 px-4 order-1 lg:order-2">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-1">Why Choose Us</span>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl text-secondary dark:text-white tracking-tight leading-[1.1] pb-1">
              Why choose <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Revonix</span>
            </h2>
          </div>

          {/* Right Column (3 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-8 w-full order-3 lg:order-3">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Future-Ready",
                desc: "AI, smart BMS & EV charging.",
                color: "bg-indigo-500/10 text-indigo-500 group-hover:text-indigo-500"
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Agile Team",
                desc: "Fast, flexible, and innovation-driven.",
                color: "bg-emerald-500/10 text-emerald-500 group-hover:text-emerald-500"
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Transparent Process",
                desc: "End-to-end control, no hidden layers.",
                color: "bg-violet-500/10 text-violet-500 group-hover:text-violet-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.08, ease: 'easeOut' as any }}
                className="p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col gap-4 justify-between min-h-[195px] group text-left"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className={`font-bold text-xl md:text-2xl text-secondary dark:text-white transition-colors ${item.color.split(' ')[2]}`}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-lg text-secondary/70 dark:text-white/60 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCTS REDIRECTION SECTION */}
      <section className="relative py-32 md:py-44 bg-secondary/5 dark:bg-[#0F172A]/10 border-y border-[#0F172A]/5 dark:border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center gap-6">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Products</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-secondary dark:text-white tracking-tight max-w-3xl leading-tight pb-1">
            Explore Our High-Performance Systems Catalog
          </h2>
          <p className="text-base md:text-xl text-secondary/70 dark:text-white/70 max-w-2xl leading-relaxed">
            Discover our customized, high-reliability battery models, controllers, and charging networks optimized for your requirements.
          </p>
          <div className="mt-4">
            <Link
              to="/products"
              className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-base rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2 group hover:scale-[1.02]"
            >
              Browse Full Catalog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative py-32 md:py-44 overflow-hidden z-10 border-b border-[#0F172A]/5 dark:border-white/5">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee-scroll {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee-scroll:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-secondary dark:text-white tracking-tight pb-1">
            We Love Our Clients And They love Us
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-x-hidden py-4">
          <div className="animate-marquee-scroll flex gap-8">
            {[
              {
                quote: "Revonix helped us move to solar without the headache. Their modular systems are not only easy to scale but also perfectly suited for our region's unpredictable power supply. Truly a game-changer!",
                name: "Rajesh Kulkarni",
                role: "Factory Owner, Pune",
                initials: "RK"
              },
              {
                quote: "What impressed me most about Revonix was their deep understanding of Indian grid challenges. Their smart storage and energy management solutions are top-notch and reliable.",
                name: "Neha Agarwal",
                role: "Architect & Sustainability Consultant",
                initials: "NA"
              },
              {
                quote: "Unlike other companies, Revonix was transparent from start to finish. Their young team is energetic, knowledgeable, and committed to real innovation — not just buzzwords.",
                name: "Arvind Menon",
                role: "Residential Customer, Kerala",
                initials: "AM"
              }
            ].concat([
              {
                quote: "Revonix helped us move to solar without the headache. Their modular systems are not only easy to scale but also perfectly suited for our region's unpredictable power supply. Truly a game-changer!",
                name: "Rajesh Kulkarni",
                role: "Factory Owner, Pune",
                initials: "RK"
              },
              {
                quote: "What impressed me most about Revonix was their deep understanding of Indian grid challenges. Their smart storage and energy management solutions are top-notch and reliable.",
                name: "Neha Agarwal",
                role: "Architect & Sustainability Consultant",
                initials: "NA"
              },
              {
                quote: "Unlike other companies, Revonix was transparent from start to finish. Their young team is energetic, knowledgeable, and committed to real innovation — not just buzzwords.",
                name: "Arvind Menon",
                role: "Residential Customer, Kerala",
                initials: "AM"
              }
            ], [
              {
                quote: "Revonix helped us move to solar without the headache. Their modular systems are not only easy to scale but also perfectly suited for our region's unpredictable power supply. Truly a game-changer!",
                name: "Rajesh Kulkarni",
                role: "Factory Owner, Pune",
                initials: "RK"
              },
              {
                quote: "What impressed me most about Revonix was their deep understanding of Indian grid challenges. Their smart storage and energy management solutions are top-notch and reliable.",
                name: "Neha Agarwal",
                role: "Architect & Sustainability Consultant",
                initials: "NA"
              },
              {
                quote: "Unlike other companies, Revonix was transparent from start to finish. Their young team is energetic, knowledgeable, and committed to real innovation — not just buzzwords.",
                name: "Arvind Menon",
                role: "Residential Customer, Kerala",
                initials: "AM"
              }
            ]).map((item, idx) => (
              <div 
                key={idx}
                className="w-[360px] md:w-[460px] p-10 rounded-2xl bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 shadow-sm flex flex-col gap-6 justify-between shrink-0"
              >
                <p className="text-base text-secondary/80 dark:text-white/70 leading-relaxed italic text-left">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3.5 border-t border-[#0F172A]/5 dark:border-white/5 pt-4 mt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm text-secondary dark:text-white">{item.name}</span>
                    <span className="block text-xs text-secondary/50 dark:text-white/40">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-28 md:py-36 max-w-5xl mx-auto px-6 z-10">
        <div className="text-center flex flex-col gap-4 mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-secondary dark:text-white tracking-tight pb-1">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-[#0F172A]/10 dark:border-white/10 rounded-xl overflow-hidden bg-white/50 dark:bg-[#0F172A]/20 backdrop-blur-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-sm md:text-base text-secondary dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-secondary/60 dark:text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`px-6 text-sm md:text-base text-secondary/70 dark:text-white/70 leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'py-5 border-t border-[#0F172A]/5 dark:border-white/5 max-h-[500px]' : 'max-h-0'
                    }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HERO CALL TO ACTION */}
      <section className="relative py-24 max-w-7xl mx-auto px-6 z-10">
        <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-br from-primary to-accent text-white text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0F172A]/10 mix-blend-multiply" />

          <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
              Ready to Engineering Your Custom Battery System?
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Partner with Revonix Technologies to secure high-performance lithium power, smart fleet charging networks, or off-grid solar microgrids.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 px-8 py-4 bg-white text-primary font-bold text-sm rounded-lg hover:bg-white/95 hover:scale-[1.02] shadow-xl hover:shadow-2xl transition-all duration-350"
          >
            Get Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
