
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { BlockRenderer } from './components/InteractiveBlocks';
import { MODULES } from './data/courseContent';
import { Lesson } from './types';

const App: React.FC = () => {
  // Mantenemos la lección de Génesis (lesson4) como activa por defecto a petición del usuario
  const [activeLessonId, setActiveLessonId] = useState('lesson4'); 
  const [activeTab, setActiveTab] = useState<'outline' | 'resources'>('outline');
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const allLessons = MODULES.flatMap(m => m.lessons);
    const found = allLessons.find(l => l.id === activeLessonId);
    if (found) {
      setLesson(found);
      // Scroll to top on lesson change
      const mainElement = document.querySelector('main');
      if (mainElement) mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeLessonId]);

  const handleNext = () => {
    const allLessons = MODULES.flatMap(m => m.lessons);
    const idx = allLessons.findIndex(l => l.id === activeLessonId);
    if (idx < allLessons.length - 1) setActiveLessonId(allLessons[idx + 1].id);
  };

  const handlePrev = () => {
    const allLessons = MODULES.flatMap(m => m.lessons);
    const idx = allLessons.findIndex(l => l.id === activeLessonId);
    if (idx > 0) setActiveLessonId(allLessons[idx - 1].id);
  };

  if (!lesson) return <div className="flex items-center justify-center h-screen"><i className="fas fa-spinner fa-spin text-4xl text-[#8B4513]"></i></div>;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar 
        activeLessonId={activeLessonId} 
        onSelectLesson={setActiveLessonId} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 overflow-y-auto relative scroll-smooth bg-[#f5f7fb]">
        {/* Banner Section */}
        <div className="relative h-96 w-full flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${lesson.bannerImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513] via-[#8B4513]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-12 pb-12 text-white max-w-5xl">
            <div className="flex items-center gap-2 text-sm font-medium mb-4 opacity-80 uppercase tracking-widest">
              <span>BibliaConnect</span>
              <i className="fas fa-chevron-right text-[10px]"></i>
              <span>Pentateuco</span>
              <i className="fas fa-chevron-right text-[10px]"></i>
              <span>Génesis</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{lesson.title}</h1>
            <p className="text-xl opacity-90 font-light max-w-2xl drop-shadow-md">{lesson.subtitle}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
            {lesson.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}

            {/* Navigation Footer */}
            <div className="mt-16 pt-8 border-t flex justify-between items-center">
              <button 
                onClick={handlePrev}
                disabled={activeLessonId === MODULES[0].lessons[0].id}
                className={`font-bold hover:translate-x-[-4px] transition flex items-center gap-2 ${activeLessonId === MODULES[0].lessons[0].id ? 'text-gray-300' : 'text-[#8B4513]'}`}
              >
                 <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button 
                onClick={handleNext}
                disabled={activeLessonId === MODULES[MODULES.length-1].lessons[MODULES[MODULES.length-1].lessons.length-1].id}
                className={`bg-gradient-to-r from-[#CD853F] to-[#8B4513] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100`}
              >
                Siguiente Lección <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <footer className="py-12 text-center text-gray-400 text-sm">
          <p>© 2025 Latin Theological Semninary - Pentateuco: Los Orígenes</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-[#8B4513] transition"></a>
            <a href="#" className="hover:text-[#8B4513] transition"></a>
            <a href="#" className="hover:text-[#8B4513] transition"></a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
