"use client";
import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function NewEntryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-secondary/30 backdrop-blur-sm" />
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 border border-outline-variant/10">
        <div className="p-10">
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-[0.25em] text-secondary/40 mb-2 block">Task Management</span>
              <h2 className="font-display text-4xl font-bold text-primary tracking-tight">New Entry</h2>
            </div>
            <button onClick={onClose} className="text-secondary/20 hover:text-primary transition-colors p-2 hover:bg-surface-low rounded-xl"><X size={24} /></button>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase font-bold text-secondary/60 tracking-widest block">Task Title</label>
              <input type="text" placeholder="e.g., Final Thesis Bibliography" className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-sans text-base placeholder:text-secondary/20 transition-all outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase font-bold text-secondary/60 tracking-widest block">Associated Class</label>
                <select className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-sans text-sm outline-none appearance-none cursor-pointer">
                  <option>Select a class</option>
                  <option>Architecture 101</option>
                  <option>Post-Modern Literature</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase font-bold text-secondary/60 tracking-widest block">Due Date</label>
                <input type="date" className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-mono text-sm uppercase outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase font-bold text-secondary/60 tracking-widest block">Contextual Tags</label>
              <select className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-sans text-sm outline-none appearance-none cursor-pointer">
                <option>Assign Category</option>
                <option>High Priority</option>
                <option>Collaborative</option>
              </select>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <button type="button" onClick={onClose} className="text-secondary/40 font-mono text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors">Discard Draft</button>
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-display font-bold text-sm tracking-tight shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">Add Task <ArrowRight size={18} /></button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
