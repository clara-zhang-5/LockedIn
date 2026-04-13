"use client";
import { motion } from 'motion/react';
import { ChevronRight, FileText, PlusCircle, Calendar as CalendarIcon, MapPin, Clock, User, CheckCircle2, Circle, Lock, BookOpen, Video } from 'lucide-react';
import { FileItem } from '../../../components/Cards';
import { useRouter } from 'next/navigation';

export default function ClassDetailPage() {
  const router = useRouter();

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <nav className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-secondary/40 mb-8">
        <button onClick={() => router.push('/classes')} className="hover:text-primary transition-colors">Classes</button>
        <ChevronRight size={12} />
        <span className="text-secondary">Advanced Typography & Form</span>
      </nav>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <h2 className="text-6xl md:text-7xl font-display font-bold leading-none tracking-tighter text-secondary mb-2">ATF-402</h2>
          <p className="text-lg text-secondary/40">Studio 04 • Fall Semester 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 border border-outline-variant/30 text-secondary rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-surface-low transition-colors">
            <FileText size={14} /> Edit Course Info
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-secondary/20">
            <PlusCircle size={14} /> Add Files
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-10 border border-outline-variant/10 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Lecture Times</p>
              <div className="flex items-center gap-3"><CalendarIcon size={18} className="text-secondary" /><p className="font-bold text-secondary">Mon / Wed / Fri</p></div>
              <p className="text-sm text-secondary/40 ml-[30px]">10:00 AM — 12:30 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Location</p>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-secondary" /><p className="font-bold text-secondary">Wing B, Studio 402</p></div>
              <p className="text-sm text-secondary/40 ml-[30px]">Design Arts Complex</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Lead Instructor</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
                  <img src="https://picsum.photos/seed/profe/100/100" alt="Instructor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <p className="font-bold text-secondary">Dr. Elena Rostova</p>
              </div>
              <p className="text-sm text-secondary/40 ml-[44px]">Senior Fellow, Typography</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Office Hours</p>
              <div className="flex items-center gap-3"><Clock size={18} className="text-secondary" /><p className="font-bold text-secondary">Tue / Thu</p></div>
              <p className="text-sm text-secondary/40 ml-[30px]">2:00 PM — 4:00 PM (By Appointment)</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-primary-container/20 rounded-3xl p-10 border border-primary-container/30 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-8">Discussion Section</p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <User size={18} className="text-secondary" />
                <div><p className="text-[9px] opacity-40 font-mono font-bold uppercase">Teaching Assistant</p><p className="font-bold text-secondary">Marcus Thorne</p></div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarIcon size={18} className="text-secondary" />
                <div><p className="text-[9px] opacity-40 font-mono font-bold uppercase">Time & Slot</p><p className="font-bold text-secondary">Thursday, 4:30 PM — 5:45 PM</p></div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <div><p className="text-[9px] opacity-40 font-mono font-bold uppercase">Location</p><p className="font-bold text-secondary">Seminar Room 12-C</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-8">
          <h3 className="text-2xl font-display font-bold text-secondary mb-8">Task Checklist</h3>
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6"><p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary">Week 10: Digital Rendering</p><div className="h-px flex-1 bg-outline-variant/20"></div></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
                  <div className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20} /><div><h4 className="font-bold text-sm text-secondary">Mastering Glyphs App</h4><p className="text-xs text-secondary/40">Completed Nov 08 • Studio Participation</p></div></div>
                </div>
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border-l-4 border-transparent shadow-sm">
                  <div className="flex items-center gap-4"><Circle className="text-secondary/20" size={20} /><div><h4 className="font-bold text-sm text-secondary">Bezier Curve Refinement</h4><p className="text-xs text-secondary/40">Due Nov 12 • Pending peer review</p></div></div>
                  <span className="px-2 py-1 bg-primary/5 text-primary text-[8px] font-mono font-bold uppercase rounded">High Priority</span>
                </div>
              </div>
            </div>

            <div className="opacity-50">
              <div className="flex items-center gap-4 mb-6"><p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary/40">Week 11: Production Phase</p><div className="h-px flex-1 bg-outline-variant/10"></div></div>
              <div className="flex items-center justify-between p-6 bg-surface-low rounded-2xl border border-dashed border-outline-variant/30">
                <div className="flex items-center gap-4"><Lock className="text-secondary/20" size={20} /><div><h4 className="font-bold text-sm text-secondary">Large Format Specimen Printing</h4><p className="text-xs text-secondary/40">Unlocks Nov 17 • Lab Section Required</p></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-12">
          <div className="bg-secondary text-white rounded-3xl p-10 shadow-xl shadow-secondary/10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-primary-container mb-6">Upcoming Deadline</p>
            <h3 className="text-2xl font-display font-bold mb-2">Final Specimen Poster</h3>
            <p className="text-primary-container/80 text-sm italic">Due in 3 days (Nov 15, 11:59 PM)</p>
            <div className="mt-10"><button className="bg-white text-secondary px-6 py-3 rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest hover:bg-surface-low transition-colors">Submit to Dropbox</button></div>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary mb-6 flex justify-between">Files<span className="text-[9px] text-secondary/40 normal-case font-sans">3 files available</span></h4>
            <div className="space-y-3">
              <FileItem icon={<FileText size={18} />} title="Course Syllabus v2.4" />
              <FileItem icon={<BookOpen size={18} />} title="Modernist Form Reader" />
              <FileItem icon={<Video size={18} />} title="Workshop Recordings" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
