"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import {
  Calendar as CalendarIcon,
  GraduationCap,
  CheckSquare,
  Bell,
  PlusCircle,
  Search,
  ChevronRight,
  Clock,
  MapPin,
  User,
  MoreVertical,
  X,
  ArrowRight,
  History,
  BookOpen,
  Video,
  FileText,
  Lock,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'calendar' | 'classes' | 'todo' | 'class-detail';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('calendar');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 h-20 glass border-b border-outline-variant/20 flex items-center px-8 md:px-12 z-50">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8 md:gap-12">
            <h1
              className="text-2xl font-display font-bold text-primary tracking-tighter cursor-pointer"
              onClick={() => setCurrentView('calendar')}
            >
              LockedIn
            </h1>
            <nav className="flex items-center gap-6 md:gap-8">
              <NavButton
                active={currentView === 'calendar'}
                onClick={() => setCurrentView('calendar')}
                icon={<CalendarIcon size={18} />}
                label="Calendar"
              />
              <NavButton
                active={currentView === 'classes' || currentView === 'class-detail'}
                onClick={() => setCurrentView('classes')}
                icon={<GraduationCap size={18} />}
                label="Classes"
              />
              <NavButton
                active={currentView === 'todo'}
                onClick={() => setCurrentView('todo')}
                icon={<CheckSquare size={18} />}
                label="To-Do"
              />
            </nav>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="p-2 text-secondary hover:bg-surface-low rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary/60">Scholar</p>
                <p className="text-xs font-bold text-secondary">Julian Voss</p>
              </div>
              <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-primary/10">
                <img
                  src="https://picsum.photos/seed/scholar/200/200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {currentView === 'calendar' && (
            <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CalendarView onNewEntry={() => setIsModalOpen(true)} />
            </motion.div>
          )}
          {currentView === 'classes' && (
            <motion.div key="classes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ClassesView onSelectClass={() => setCurrentView('class-detail')} onNewEntry={() => setIsModalOpen(true)} />
            </motion.div>
          )}
          {currentView === 'class-detail' && (
            <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ClassDetailView onBack={() => setCurrentView('classes')} />
            </motion.div>
          )}
          {currentView === 'todo' && (
            <motion.div key="todo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TodoView onNewEntry={() => setIsModalOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* New Entry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <NewEntryModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-1 py-1 transition-all relative group ${active ? 'text-primary font-bold' : 'text-secondary/60 hover:text-secondary'
        }`}
    >
      <span className={`${active ? 'text-primary' : 'text-secondary/40 group-hover:text-secondary/60'}`}>
        {icon}
      </span>
      <span className="font-display tracking-tight text-sm hidden md:block">{label}</span>
      {active && (
        <motion.div
          layoutId="nav-active"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
        />
      )}
    </button>
  );
}

// --- Views ---

function CalendarView({ onNewEntry }: { onNewEntry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12"
    >
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
                <div
                  key={i}
                  className={`aspect-[1/1.1] p-4 bg-white relative group cursor-pointer hover:bg-surface-low transition-colors ${!isCurrentMonth ? 'opacity-20' : ''}`}
                >
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

        <button
          onClick={onNewEntry}
          className="mt-12 px-8 py-4 rounded-2xl bg-primary text-white font-display font-bold flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
        >
          <PlusCircle size={20} />
          <span className="uppercase tracking-widest text-xs">New Academic Entry</span>
        </button>
      </div>

      <aside className="lg:col-span-4 space-y-12">
        <div>
          <h3 className="text-xl font-display font-bold text-secondary mb-8 flex items-center gap-3">
            <Clock className="text-primary" size={24} />
            Upcoming Deadlines
          </h3>
          <div className="space-y-6">
            <DeadlineCard
              priority="Critical"
              time="In 2 Days"
              title="Comparative Literature Thesis Review"
              desc="Submit first draft of Chapter 3 focusing on post-modern narratives."
              collaborative
            />
            <DeadlineCard
              priority="Academic"
              time="Oct 14"
              title="Archeology Field Notes Archive"
              desc="Categorize high-resolution scans from the Athens digital excavation."
              progress={65}
            />
            <button className="w-full border-2 border-dashed border-outline-variant/30 p-6 rounded-2xl opacity-60 hover:opacity-100 hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center group">
              <PlusCircle className="text-secondary/40 group-hover:text-primary mb-2" size={24} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary/40 group-hover:text-primary">Add Milestone</span>
            </button>
          </div>
        </div>
      </aside>
    </motion.div>
  );
}

function DeadlineCard({ priority, time, title, desc, collaborative, progress }: { priority: string, time: string, title: string, desc: string, collaborative?: boolean, progress?: number }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border ${priority === 'Critical' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-surface-low text-secondary border-outline-variant/20'
          }`}>
          {priority}
        </span>
        <span className="text-[10px] font-mono font-bold text-secondary/40 uppercase tracking-widest">{time}</span>
      </div>
      <h4 className="font-display font-bold text-secondary text-lg mb-2 leading-tight group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-secondary/60 text-xs mb-4 leading-relaxed">{desc}</p>

      {collaborative && (
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2].map(i => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                <img src={`https://picsum.photos/seed/collab${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <span className="text-[10px] font-mono font-bold text-secondary/40 uppercase tracking-widest">Collaborative</span>
        </div>
      )}

      {progress !== undefined && (
        <div>
          <div className="w-full bg-surface-low h-1 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-primary h-full"
            />
          </div>
          <p className="text-[9px] font-mono font-bold text-primary mt-2 uppercase tracking-widest">{progress}% Processed</p>
        </div>
      )}
    </div>
  );
}

function ClassesView({ onSelectClass, onNewEntry }: { onSelectClass: () => void, onNewEntry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-secondary leading-none tracking-tighter mb-4">Curated Classes</h2>
          <p className="text-secondary/60 max-w-xl italic text-lg">
            The current semester's selection of academic explorations and archival inquiries.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 mr-4">
            <span className="px-4 py-1 rounded-lg bg-surface-highest text-[10px] font-mono font-bold tracking-widest text-secondary uppercase">Spring 2024</span>
            <span className="px-4 py-1 rounded-lg bg-primary text-white text-[10px] font-mono font-bold tracking-widest uppercase">Active</span>
          </div>
          <button
            onClick={onNewEntry}
            className="px-6 py-3 bg-primary text-white rounded-xl font-display font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <PlusCircle size={18} />
            New Entry
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ClassCard
          icon={<History size={24} />}
          title="Renaissance Manuscripts"
          time="09:30 AM"
          location="Hall 4B"
          tasks={2}
          pending={["Annotate Petrarch's Sonnets", "Submit vellum source analysis"]}
          onClick={onSelectClass}
        />
        <ClassCard
          icon={<History size={24} />} // Should be architecture icon but using history for now
          title="Classical Architecture"
          time="11:00 AM"
          location="Studio 12"
          nextUp="Review Doric Column proportions for Monday's lecture."
          onClick={onSelectClass}
        />
        <ClassCard
          image="https://picsum.photos/seed/books/600/400"
          title="Epistemology 101"
          time="02:30 PM"
          location="Library Annex"
          urgent="Final essay outline due by midnight tonight."
          onClick={onSelectClass}
        />
        <ClassCard
          icon={<BookOpen size={24} />}
          title="Comparative Literature"
          time="04:00 PM"
          location="Virtual Room 8"
          tasks={1}
          toRead={'"The Name of the Rose" - Chapters 1-3'}
          onClick={onSelectClass}
        />
        <div className="md:col-span-2">
          <WorkshopCard
            title="Chemical Paleography"
            desc="Advanced techniques in non-destructive ink analysis and paper aging simulations."
            time="Sat, 10:00 AM"
            location="Main Lab"
            onClick={onSelectClass}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ClassCard({ icon, image, title, time, location, tasks, pending, nextUp, urgent, toRead, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-3xl p-8 hover:bg-surface-low transition-all duration-500 cursor-pointer border border-outline-variant/10 hover:border-primary/30 flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5"
    >
      {image ? (
        <div className="h-40 -mx-8 -mt-8 mb-6 overflow-hidden relative rounded-t-3xl">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-white font-display font-bold text-xl">{title}</span>
        </div>
      ) : (
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-surface-low rounded-2xl group-hover:bg-white transition-colors text-primary">
            {icon}
          </div>
          {tasks && (
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/5 px-2 py-1 rounded-lg border border-primary/10">
              {tasks} Tasks
            </span>
          )}
        </div>
      )}

      <div className="flex-1">
        {!image && <h3 className="text-2xl font-display font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{title}</h3>}
        <div className="flex items-center gap-3 text-secondary/40 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>

        {pending && (
          <div className="bg-surface-low p-4 rounded-2xl group-hover:bg-white/50 transition-colors border border-outline-variant/10">
            <p className="text-[10px] font-mono font-bold uppercase text-primary mb-3">Pending</p>
            <ul className="space-y-2">
              {pending.map((task: string) => (
                <li key={task} className="text-sm text-secondary/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        {nextUp && (
          <div className="bg-surface-low p-4 rounded-2xl group-hover:bg-white/50 transition-colors border border-outline-variant/10">
            <p className="text-[10px] font-mono font-bold uppercase text-secondary mb-2">Up Next</p>
            <p className="text-sm italic text-secondary/70">{nextUp}</p>
          </div>
        )}

        {urgent && (
          <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-white/50 transition-colors border border-primary/10">
            <p className="text-[10px] font-mono font-bold uppercase text-primary mb-2">Urgent</p>
            <p className="text-sm text-secondary/70">{urgent}</p>
          </div>
        )}

        {toRead && (
          <div className="bg-surface-low p-4 rounded-2xl group-hover:bg-white/50 transition-colors border border-outline-variant/10">
            <p className="text-[10px] font-mono font-bold uppercase text-primary mb-2">To Read</p>
            <p className="text-sm text-secondary/70">{toRead}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        <span className="text-xs font-mono font-bold uppercase tracking-widest">Open Syllabus</span>
        <ChevronRight size={18} />
      </div>
    </div>
  );
}

function WorkshopCard({ title, desc, time, location, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="group bg-gradient-to-br from-secondary to-primary text-white rounded-3xl p-8 hover:opacity-95 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden shadow-xl shadow-primary/10"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl">
            <History size={24} />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase bg-white/20 px-3 py-1 rounded-lg">Workshop</span>
        </div>

        <div className="flex-1 md:flex gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-display font-bold mb-4">{title}</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed italic">{desc}</p>
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-primary-container mb-4">Preparation Checklist</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-primary-container" />
                Secure sample specimens
              </li>
              <li className="flex items-center gap-3 text-sm opacity-50">
                <Circle size={18} />
                Calibrate spectrometer
              </li>
              <li className="flex items-center gap-3 text-sm opacity-50">
                <Circle size={18} />
                Safety waiver signature
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest border-b border-white/30 pb-1">Review Lab Protocols</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}

function ClassDetailView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <nav className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-secondary/40 mb-8">
        <button onClick={onBack} className="hover:text-primary transition-colors">Classes</button>
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
            <FileText size={14} />
            Edit Course Info
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-secondary/20">
            <PlusCircle size={14} />
            Add Files
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-10 border border-outline-variant/10 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Lecture Times</p>
              <div className="flex items-center gap-3">
                <CalendarIcon size={18} className="text-secondary" />
                <p className="font-bold text-secondary">Mon / Wed / Fri</p>
              </div>
              <p className="text-sm text-secondary/40 ml-7.5">10:00 AM — 12:30 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Location</p>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <p className="font-bold text-secondary">Wing B, Studio 402</p>
              </div>
              <p className="text-sm text-secondary/40 ml-7.5">Design Arts Complex</p>
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
              <p className="text-sm text-secondary/40 ml-11">Senior Fellow, Typography</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">Office Hours</p>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary" />
                <p className="font-bold text-secondary">Tue / Thu</p>
              </div>
              <p className="text-sm text-secondary/40 ml-7.5">2:00 PM — 4:00 PM (By Appointment)</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-primary-container/20 rounded-3xl p-10 border border-primary-container/30 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-8">Discussion Section</p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <User size={18} className="text-secondary" />
                <div>
                  <p className="text-[9px] opacity-40 font-mono font-bold uppercase">Teaching Assistant</p>
                  <p className="font-bold text-secondary">Marcus Thorne</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarIcon size={18} className="text-secondary" />
                <div>
                  <p className="text-[9px] opacity-40 font-mono font-bold uppercase">Time & Slot</p>
                  <p className="font-bold text-secondary">Thursday, 4:30 PM — 5:45 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <p className="text-[9px] opacity-40 font-mono font-bold uppercase">Location</p>
                  <p className="font-bold text-secondary">Seminar Room 12-C</p>
                </div>
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
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary">Week 10: Digital Rendering</p>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-primary" size={20} />
                    <div>
                      <h4 className="font-bold text-sm text-secondary">Mastering Glyphs App</h4>
                      <p className="text-xs text-secondary/40">Completed Nov 08 • Studio Participation</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border-l-4 border-transparent shadow-sm">
                  <div className="flex items-center gap-4">
                    <Circle className="text-secondary/20" size={20} />
                    <div>
                      <h4 className="font-bold text-sm text-secondary">Bezier Curve Refinement</h4>
                      <p className="text-xs text-secondary/40">Due Nov 12 • Pending peer review</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-primary/5 text-primary text-[8px] font-mono font-bold uppercase rounded">High Priority</span>
                </div>
              </div>
            </div>

            <div className="opacity-50">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary/40">Week 11: Production Phase</p>
                <div className="h-px flex-1 bg-outline-variant/10"></div>
              </div>
              <div className="flex items-center justify-between p-6 bg-surface-low rounded-2xl border border-dashed border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <Lock className="text-secondary/20" size={20} />
                  <div>
                    <h4 className="font-bold text-sm text-secondary">Large Format Specimen Printing</h4>
                    <p className="text-xs text-secondary/40">Unlocks Nov 17 • Lab Section Required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-12">
          <div className="bg-secondary text-white rounded-3xl p-10 shadow-xl shadow-secondary/10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-primary-container mb-6">Upcoming Deadline</p>
            <h3 className="text-2xl font-display font-bold mb-2">Final Specimen Poster</h3>
            <p className="text-primary-container/80 text-sm italic">Due in 3 days (Nov 15, 11:59 PM)</p>
            <div className="mt-10">
              <button className="bg-white text-secondary px-6 py-3 rounded-xl font-mono font-bold text-[10px] uppercase tracking-widest hover:bg-surface-low transition-colors">Submit to Dropbox</button>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary mb-6 flex justify-between">
              Files
              <span className="text-[9px] text-secondary/40 normal-case font-sans">3 files available</span>
            </h4>
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

function FileItem({ icon, title }: { icon: ReactNode, title: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-low hover:bg-white hover:shadow-md transition-all group cursor-pointer border border-transparent hover:border-outline-variant/20">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-outline-variant/10 text-primary">
          {icon}
        </div>
        <span className="text-sm font-bold text-secondary">{title}</span>
      </div>
      <ChevronRight size={16} className="text-secondary/20 group-hover:text-primary transition-colors" />
    </div>
  );
}

function TodoView({ onNewEntry }: { onNewEntry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto"
    >
      <header className="mb-12 flex items-baseline justify-between">
        <h2 className="text-6xl font-display font-bold text-secondary tracking-tighter">To-Do</h2>
        <div className="flex items-center gap-12">
          <div className="text-right">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">Incomplete</p>
            <p className="text-4xl font-display font-bold text-secondary">12</p>
          </div>
          <button
            onClick={onNewEntry}
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
          <TodoItem
            title="Final Thesis Draft: Chapter 4"
            tag="High Priority"
            course="Curatorial Studies"
            due="Due May 14, 2024"
          />
          <TodoItem
            title="Source Bibliography Formatting"
            tag="Admin"
            course="Research Methods"
            due="Due tomorrow"
          />
          <TodoItem
            title="Abstract Submission: Visual Theory Symposia"
            tag="Critical"
            course="Visual Theory"
            due="May 20"
          />
          <div className="opacity-40">
            <TodoItem
              title="Mid-Term Reflection Paper"
              course="Modernism Lab"
              due="Completed 2 days ago"
              completed
            />
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
  );
}

function TodoItem({ title, tag, course, due, completed }: { title: string, tag?: string, course: string, due: string, completed?: boolean }) {
  return (
    <div className="group flex items-center gap-6 p-6 bg-white border border-outline-variant/10 rounded-3xl transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 cursor-pointer">
      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${completed ? 'bg-secondary border-secondary' : 'border-outline-variant/30 group-hover:border-primary'
        }`}>
        {completed && <CheckSquare size={14} className="text-white" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`font-display text-lg font-bold text-secondary ${completed ? 'line-through opacity-60' : ''}`}>{title}</h3>
          {tag && (
            <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${tag === 'High Priority' ? 'bg-primary/10 text-primary' : 'bg-surface-low text-secondary'
              }`}>
              {tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold text-secondary/40 uppercase tracking-wider">
          <span className="flex items-center gap-1"><GraduationCap size={12} /> {course}</span>
          <span className="flex items-center gap-1"><CalendarIcon size={12} /> {due}</span>
        </div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary/20 hover:text-secondary">
        <MoreVertical size={20} />
      </button>
    </div>
  );
}

function NewEntryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-secondary/30 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 border border-outline-variant/10"
      >
        <div className="p-10">
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-[0.25em] text-secondary/40 mb-2 block">Task Management</span>
              <h2 className="font-display text-4xl font-bold text-primary tracking-tight">New Entry</h2>
            </div>
            <button
              onClick={onClose}
              className="text-secondary/20 hover:text-primary transition-colors p-2 hover:bg-surface-low rounded-xl"
            >
              <X size={24} />
            </button>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase font-bold text-secondary/60 tracking-widest block">Task Title</label>
              <input
                type="text"
                placeholder="e.g., Final Thesis Bibliography"
                className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-sans text-base placeholder:text-secondary/20 transition-all outline-none"
              />
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
                <input
                  type="date"
                  className="w-full bg-surface-low/50 border border-outline-variant/20 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary px-5 py-4 font-mono text-sm uppercase outline-none"
                />
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
              <button
                type="button"
                onClick={onClose}
                className="text-secondary/40 font-mono text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors"
              >
                Discard Draft
              </button>
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-display font-bold text-sm tracking-tight shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
              >
                Add Task
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
