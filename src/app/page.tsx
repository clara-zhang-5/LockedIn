"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlusCircle, Clock } from 'lucide-react';
import { DeadlineCard } from '../components/Cards';
import NewEntryModal from '../components/NewEntryModal';

export default function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tighter text-secondary leading-none">October</h2>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary mt-4">Academic Year 2024 / Q4</p>
            </div>
            <div className="flex gap-1 p-1 bg-surface-low rounded-xl">
              <button className="px-6 py-2 rounded-lg bg-white text-primary text-xs font-bold shadow-sm font-mono">Month</button>
              <button className="px-6 py-2 rounded-lg text-secondary/40 text-xs font-bold hover:text-secondary transition-colors font-mono">Week</button>
              <button className="px-6 py-2 rounded-lg text-secondary/40 text-xs font-bold hover:text-secondary transition-colors font-mono">Day</button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(64,48,12,0.04)] border border-outline-variant/10">
            <div className="grid grid-cols-7 mb-8">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className={`text-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${i >= 5 ? 'text-primary' : 'text-secondary/40'}`}>
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px bg-outline-variant/10">
              {Array.from({ length: 35 }).map((_, i) => {
                const dayNum = i - 2;
                const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                return (
                  <div key={i} className={`aspect-[1/1.1] p-4 bg-white relative group cursor-pointer hover:bg-surface-low transition-colors ${!isCurrentMonth ? 'opacity-20' : ''}`}>
                    <span className={`text-sm font-bold ${isCurrentMonth ? 'text-secondary' : 'text-secondary/40'}`}>
                      {dayNum <= 0 ? 30 + dayNum : dayNum > 31 ? dayNum - 31 : dayNum}
                    </span>

                    {dayNum === 8 && (
                      <div className="mt-2 p-2 bg-primary-container/30 rounded-lg border-b-2 border-primary/20">
                        <p className="text-[9px] font-mono font-bold uppercase leading-tight text-primary">Historiography Sem.</p>
                      </div>
                    )}

                    {dayNum === 21 && (
                      <div className="mt-2 p-2 bg-secondary text-white rounded-lg shadow-lg shadow-secondary/20">
                        <p className="text-[9px] font-mono font-bold uppercase leading-tight">Critical Review</p>
                        <p className="text-[8px] opacity-60 mt-1 uppercase">14:00 PM</p>
                      </div>
                    )}

                    {dayNum === 12 && (
                      <div className="mt-2">
                        <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[8px] font-mono font-bold rounded uppercase border border-tertiary/20">Research Due</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="mt-12 px-8 py-4 rounded-2xl bg-primary text-white font-display font-bold flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
            <PlusCircle size={20} />
            <span className="uppercase tracking-widest text-xs">New Academic Entry</span>
          </button>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div>
            <h3 className="text-xl font-display font-bold text-secondary mb-8 flex items-center gap-3"><Clock className="text-primary" size={24} /> Upcoming Deadlines</h3>
            <div className="space-y-6">
              <DeadlineCard priority="Critical" time="In 2 Days" title="Comparative Literature Thesis Review" desc="Submit first draft of Chapter 3 focusing on post-modern narratives." collaborative />
              <DeadlineCard priority="Academic" time="Oct 14" title="Archeology Field Notes Archive" desc="Categorize high-resolution scans from the Athens digital excavation." progress={65} />
              <button className="w-full border-2 border-dashed border-outline-variant/30 p-6 rounded-2xl opacity-60 hover:opacity-100 hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center group">
                <PlusCircle className="text-secondary/40 group-hover:text-primary mb-2" size={24} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary/40 group-hover:text-primary">Add Milestone</span>
              </button>
            </div>
          </div>
        </aside>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <NewEntryModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
