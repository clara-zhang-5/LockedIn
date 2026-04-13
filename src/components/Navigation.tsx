"use client";
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, GraduationCap, CheckSquare, Bell } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 glass border-b border-outline-variant/20 flex items-center px-8 md:px-12 z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/" className="text-2xl font-display font-bold text-primary tracking-tighter">
            LockedIn
          </Link>
          <nav className="flex items-center gap-6 md:gap-8">
            <NavButton
              active={pathname === '/' || pathname === '/calendar'}
              href="/"
              icon={<CalendarIcon size={18} />}
              label="Calendar"
            />
            <NavButton
              active={pathname.startsWith('/classes')}
              href="/classes"
              icon={<GraduationCap size={18} />}
              label="Classes"
            />
            <NavButton
              active={pathname.startsWith('/todo')}
              href="/todo"
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
  );
}

function NavButton({ active, href, icon, label }: { active: boolean, href: string, icon: ReactNode, label: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-1 py-1 transition-all relative group ${active ? 'text-primary font-bold' : 'text-secondary/60 hover:text-secondary'}`}
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
    </Link>
  );
}
