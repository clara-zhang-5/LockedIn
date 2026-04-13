"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlusCircle } from 'lucide-react';
import { TodoItem } from '../../components/Cards';
import NewEntryModal from '../../components/NewEntryModal';

export default function TodoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-5xl mx-auto">
        <header className="mb-12 flex items-baseline justify-between">
          <h2 className="text-6xl font-display font-bold text-secondary tracking-tighter">To-Do</h2>
          <div className="flex items-center gap-12">
            <div className="text-right">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">Incomplete</p>
              <p className="text-4xl font-display font-bold text-secondary">12</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-display font-bold text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
            >
              <PlusCircle size={20} />
              New Entry
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-3 space-y-8">
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-6">Disciplines</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between text-sm font-bold text-secondary cursor-pointer hover:text-primary transition-colors">
                  All Classes <span className="text-[10px] px-2 py-0.5 bg-primary-container/20 rounded-full text-primary">24</span>
                </li>
                <li className="flex items-center justify-between text-sm font-bold text-primary cursor-pointer">
                  Priority <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </li>
                {['Modernism Lab', 'Curatorial Studies', 'Visual Theory'].map(item => (
                  <li key={item} className="text-sm font-bold text-secondary/40 cursor-pointer hover:text-secondary transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 space-y-4">
            <TodoItem title="Final Thesis Draft: Chapter 4" tag="High Priority" course="Curatorial Studies" due="Due May 14, 2024" />
            <TodoItem title="Source Bibliography Formatting" tag="Admin" course="Research Methods" due="Due tomorrow" />
            <TodoItem title="Abstract Submission: Visual Theory Symposia" tag="Critical" course="Visual Theory" due="May 20" />
            <div className="opacity-40">
              <TodoItem title="Mid-Term Reflection Paper" course="Modernism Lab" due="Completed 2 days ago" completed />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 space-y-8">
            <div className="bg-surface-low p-6 rounded-3xl border-t-4 border-primary shadow-sm">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-6">Quick Deposit</h4>
              <textarea
                className="w-full bg-white border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 resize-none h-32 italic text-secondary/60"
                placeholder="Record a fleeting thought..."
              ></textarea>
              <button className="w-full mt-4 py-3 bg-secondary text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Append to Stack
              </button>
            </div>
            <div className="bg-primary-container/10 p-6 rounded-3xl border border-primary-container/20">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://picsum.photos/seed/archive/400/300" alt="Archive" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-xs italic text-secondary/80 leading-relaxed">"Methodical organization is the prerequisite for intellectual liberty."</p>
              <p className="text-[9px] font-mono font-bold uppercase tracking-widest mt-3 text-primary">— The Atelier Archive</p>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <NewEntryModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
