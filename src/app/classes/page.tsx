"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlusCircle, History, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ClassCard, WorkshopCard } from '../../components/Cards';
import NewEntryModal from '../../components/NewEntryModal';

export default function ClassesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSelectClass = () => {
    router.push('/classes/atf-402');
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
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
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-primary text-white rounded-xl font-display font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              <PlusCircle size={18} />
              New Entry
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ClassCard icon={<History size={24} />} title="Renaissance Manuscripts" time="09:30 AM" location="Hall 4B" tasks={2} pending={["Annotate Petrarch's Sonnets", "Submit vellum source analysis"]} onClick={handleSelectClass} />
          <ClassCard icon={<History size={24} />} title="Classical Architecture" time="11:00 AM" location="Studio 12" nextUp="Review Doric Column proportions for Monday's lecture." onClick={handleSelectClass} />
          <ClassCard image="https://picsum.photos/seed/books/600/400" title="Epistemology 101" time="02:30 PM" location="Library Annex" urgent="Final essay outline due by midnight tonight." onClick={handleSelectClass} />
          <ClassCard icon={<BookOpen size={24} />} title="Comparative Literature" time="04:00 PM" location="Virtual Room 8" tasks={1} toRead={'"The Name of the Rose" - Chapters 1-3'} onClick={handleSelectClass} />
          <div className="md:col-span-2">
            <WorkshopCard title="Chemical Paleography" desc="Advanced techniques in non-destructive ink analysis and paper aging simulations." time="Sat, 10:00 AM" location="Main Lab" onClick={handleSelectClass} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <NewEntryModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
