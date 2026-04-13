"use client";
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, History, CheckCircle2, Circle, ChevronRight, MoreVertical, CheckSquare, GraduationCap, Calendar as CalendarIcon, BookOpen, Video, FileText } from 'lucide-react';

export function DeadlineCard({ priority, time, title, desc, collaborative, progress }: { priority: string, time: string, title: string, desc: string, collaborative?: boolean, progress?: number }) {
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
            <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="bg-primary h-full" />
          </div>
          <p className="text-[9px] font-mono font-bold text-primary mt-2 uppercase tracking-widest">{progress}% Processed</p>
        </div>
      )}
    </div>
  );
}

export function ClassCard({ icon, image, title, time, location, tasks, pending, nextUp, urgent, toRead, onClick }: any) {
  return (
    <div onClick={onClick} className="group bg-white rounded-3xl p-8 hover:bg-surface-low transition-all duration-500 cursor-pointer border border-outline-variant/10 hover:border-primary/30 flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-primary/5">
      {image ? (
        <div className="h-40 -mx-8 -mt-8 mb-6 overflow-hidden relative rounded-t-3xl">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-white font-display font-bold text-xl">{title}</span>
        </div>
      ) : (
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-surface-low rounded-2xl group-hover:bg-white transition-colors text-primary">{icon}</div>
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
          <div className="flex items-center gap-1"><Clock size={14} /><span>{time}</span></div>
          <div className="flex items-center gap-1"><MapPin size={14} /><span>{location}</span></div>
        </div>

        {pending && (
          <div className="bg-surface-low p-4 rounded-2xl group-hover:bg-white/50 transition-colors border border-outline-variant/10">
            <p className="text-[10px] font-mono font-bold uppercase text-primary mb-3">Pending</p>
            <ul className="space-y-2">
              {pending.map((task: string) => (
                <li key={task} className="text-sm text-secondary/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>{task}
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

export function WorkshopCard({ title, desc, time, location, onClick }: any) {
  return (
    <div onClick={onClick} className="group bg-gradient-to-br from-secondary to-primary text-white rounded-3xl p-8 hover:opacity-95 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden shadow-xl shadow-primary/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl"><History size={24} /></div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase bg-white/20 px-3 py-1 rounded-lg">Workshop</span>
        </div>
        <div className="flex-1 md:flex gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-display font-bold mb-4">{title}</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed italic">{desc}</p>
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-1"><Clock size={14} /><span>{time}</span></div>
              <div className="flex items-center gap-1"><MapPin size={14} /><span>{location}</span></div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-primary-container mb-4">Preparation Checklist</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-container" /> Secure sample specimens</li>
              <li className="flex items-center gap-3 text-sm opacity-50"><Circle size={18} /> Calibrate spectrometer</li>
              <li className="flex items-center gap-3 text-sm opacity-50"><Circle size={18} /> Safety waiver signature</li>
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

export function TodoItem({ title, tag, course, due, completed }: { title: string, tag?: string, course: string, due: string, completed?: boolean }) {
  return (
    <div className="group flex items-center gap-6 p-6 bg-white border border-outline-variant/10 rounded-3xl transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 cursor-pointer">
      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${completed ? 'bg-secondary border-secondary' : 'border-outline-variant/30 group-hover:border-primary'}`}>
        {completed && <CheckSquare size={14} className="text-white" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`font-display text-lg font-bold text-secondary ${completed ? 'line-through opacity-60' : ''}`}>{title}</h3>
          {tag && (
             <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${tag === 'High Priority' ? 'bg-primary/10 text-primary' : 'bg-surface-low text-secondary'}`}>
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

export function FileItem({ icon, title }: { icon: ReactNode, title: string }) {
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
