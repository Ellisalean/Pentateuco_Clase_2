
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { BlockRenderer } from './components/InteractiveBlocks';
import { MODULES } from './data/courseContent';
import { Lesson } from './types';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState('lesson4'); 
  const [activeTab, setActiveTab] = useState<'outline' | 'resources'>('outline');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  
  // En PC iniciamos abierto, en móvil cerrado por defecto para mejor vista
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const allLessons = MODULES.flatMap(m => m.lessons);
    const found = allLessons.find(l => l.id === activeLessonId);
    if (found) {
      setLesson(found);
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
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      
      {/* Overlay para móviles */}
      <div 
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Retráctil */}
      <div 
        className={`fixed lg:relative inset-y-0 left-0 z-40 transition-all duration-300 ease-in-out bg-white border-r overflow-hidden ${
          isSidebarOpen ? 'w-80' : 'w-0 lg:w-0 -translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="w-80 h-full">
          <Sidebar 
            activeLessonId={activeLessonId} 
            onSelectLesson={(id) => {
              setActiveLessonId(id);
              if (window.innerWidth < 1024) setIsSidebarOpen(false);
            }} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>

      {/* Botón de APERTURA (Solo se ve si el menú está cerrado) */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-[#8B4513] text-white w-12 h-12 rounded-xl shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      )}

      {/* Área de Contenido Principal */}
      <main className="flex-1 overflow-y-auto relative scroll-smooth bg-[#f5f7fb]">
        
        {/* Banner Section con espaciado inteligente */}
        <div className="relative h-80 md:h-96 w-full flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${lesson.bannerImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513] via-[#8B4513]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 md:px-12 pb-8 md:pb-12 text-white max-w-5xl">
            {/* Ajuste de padding izquierdo cuando el botón de hamburguesa está presente */}
            <div className={`transition-all duration-300 ${!isSidebarOpen ? 'pl-12 md:pl-0' : 'pl-0'}`}>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium mb-2 md:mb-4 opacity-80 uppercase tracking-widest">
                <span className="hidden sm:inline">BibliaConnect</span>
                <i className="fas fa-chevron-right text-[8px] md:text-[10px] hidden sm:inline"></i>
                <span>Pentateuco</span>
                <i className="fas fa-chevron-right text-[8px] md:text-[10px]"></i>
                <span>Génesis</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                {lesson.title}
              </h1>
              <p className="text-base md:text-xl opacity-90 font-light max-w-2xl drop-shadow-md">
                {lesson.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 md:p-12">
            {lesson.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}

            {/* Navegación Inferior */}
            <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
              <button 
                onClick={handlePrev}
                disabled={activeLessonId === 'lesson1'}
                className={`w-full sm:w-auto font-bold transition flex items-center justify-center gap-2 px-6 py-3 rounded-xl ${
                  activeLessonId === 'lesson1' ? 'text-gray-300' : 'text-[#8B4513] hover:bg-[#8B4513]/5'
                }`}
              >
                 <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button 
                onClick={handleNext}
                disabled={activeLessonId === 'lesson5'}
                className={`w-full sm:w-auto bg-gradient-to-r from-[#CD853F] to-[#8B4513] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100`}
              >
                Siguiente Lección <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <footer className="py-12 text-center text-gray-400 text-sm px-4">
          <p>© 2025 Latin Theological Seminary - Pentateuco: Los Orígenes</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
