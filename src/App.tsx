/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ["Collections", "Archives", "Philosophy", "About"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* Navigation Rail - Vertical Left (Desktop) */}
      <div className="fixed left-0 top-0 bottom-0 w-16 border-r border-brand-ink/10 hidden lg:flex flex-col items-center py-8 z-50">
        <div className="vertical-text whitespace-nowrap">
          EST. MMXXIV &mdash; LONDON
        </div>
        <div className="mt-auto space-y-8">
          <button className="p-2 hover:bg-brand-ink/5 rounded-full transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-brand-ink text-brand-paper hover:bg-brand-ink/90 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-brand-ink/10 flex lg:hidden items-center justify-between px-6 bg-brand-paper/80 backdrop-blur-md z-50">
        <div className="font-serif italic text-xl tracking-tight">The Curator</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-paper z-40 flex flex-col justify-center items-center"
          >
            <nav className="space-y-6 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                  href="#"
                  className="block text-4xl md:text-6xl font-serif hover:italic transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="lg:pl-16 pt-16 lg:pt-0">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 border-b border-brand-ink/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-[11px] uppercase tracking-[0.3em] font-medium opacity-60 mb-8">
                  Presenting the Anthology
                </div>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-[10vw] leading-[0.9] tracking-tighter">
                  Silence is <br />
                  <span className="italic font-light text-brand-accent">the Ultimate</span> <br />
                  Sophistication.
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-md text-sm leading-relaxed opacity-70"
              >
                A curated exploration of form, light, and the quiet spaces in between. 
                Dedicated to the pursuit of timeless aesthetic and functional purity.
              </motion.p>
              
              <motion.button
                whileHover={{ gap: "1.5rem" }}
                className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase border-b border-brand-ink/20 pb-2 group"
              >
                Enter the Gallery <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="oval-mask overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop" 
                  alt="Minimalist Interior" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-8 -left-8 bg-brand-paper p-6 border border-brand-ink/10 hidden md:block">
                <div className="font-serif italic text-2xl">Mme. Volnay, 1928</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Archival Print No. 42</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Grid */}
        <section className="py-24 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-brand-ink/10 pb-8">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl">Curated works</h2>
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50 mt-2">Selection I &mdash; IV</div>
              </div>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">View All</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-brand-ink/10">
              {[
                { title: "Object of Desire", year: "2023", category: "Form", img: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1854&auto=format&fit=crop" },
                { title: "Shadow play", year: "2024", category: "Light", img: "https://images.unsplash.com/photo-1510520434124-5bc7e6438dc1?q=80&w=1887&auto=format&fit=crop" },
                { title: "The Void", year: "2022", category: "Space", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ backgroundColor: "rgba(26,26,26,0.03)" }}
                  className="group relative p-8 border-r border-b border-brand-ink/10 cursor-pointer overflow-hidden h-[500px] flex flex-col"
                >
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">/0{idx + 1}</span>
                      <h3 className="font-serif text-3xl mt-2 group-hover:italic transition-all">{item.title}</h3>
                    </div>
                    <ArrowUpRight size={20} strokeWidth={1} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <div className="text-[10px] uppercase tracking-widest font-medium opacity-60">{item.category}</div>
                    <div className="text-xs font-light italic mt-1">{item.year}</div>
                  </div>

                  {/* Peek-a-boo Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Footer Segment */}
        <section className="py-32 bg-brand-ink text-brand-paper px-6 lg:px-24 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.5em] font-light opacity-50"
            >
              The Manifesto
            </motion.div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight italic">
              "We believe in the power of less. In the dignity of a single line. 
              In the narrative weight of what remains unsaid."
            </h2>
            <div className="pt-12">
              <div className="h-24 w-px bg-brand-paper/20 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <footer className="py-12 border-t border-brand-ink/10 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-2xl italic tracking-tight">The Curator</div>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
              <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Inquiries</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Archives</a>
            </div>
            <div className="text-[9px] uppercase tracking-widest opacity-30">
              &copy; 2024 Design by The Curator Group. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
