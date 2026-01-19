
import React from 'react';
import { MODULES, RESOURCES } from '../data/courseContent';

interface SidebarProps {
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  activeTab: 'outline' | 'resources';
  setActiveTab: (tab: 'outline' | 'resources') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeLessonId, onSelectLesson, activeTab, setActiveTab }) => {
  // Calculamos el progreso real basado en la posición de la lección activa
  const allLessons = MODULES.flatMap(m => m.lessons);
  const activeIndex = allLessons.findIndex(l => l.id === activeLessonId);
  const progress = Math.round(((activeIndex + 1) / allLessons.length) * 100);

  return (
    <aside className="w-80 flex-shrink-0 bg-white border-r h-full flex flex-col overflow-hidden shadow-xl z-20">
      <div className="flex border-b">
        <button 
          onClick={() => setActiveTab('outline')}
          className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'outline' ? 'border-b-4 border-[#8B4513] text-[#8B4513]' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fas fa-list-ol mr-2"></i> Contenido
        </button>
        <button 
          onClick={() => setActiveTab('resources')}
          className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'resources' ? 'border-b-4 border-[#8B4513] text-[#8B4513]' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fas fa-file-alt mr-2"></i> Recursos
        </button>
      </div>

      <div className="flex-1 overflow-y-auto sidebar-scroll p-4">
        {activeTab === 'outline' ? (
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-600 mb-2">
                <span>Tu Progreso</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#CD853F] to-[#8B4513] transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {MODULES.map((module) => (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center gap-2 text-[#8B4513] font-bold text-sm uppercase tracking-wider mb-2">
                  <i className="fas fa-folder-open"></i> {module.title}
                </div>
                <div className="space-y-1">
                  {module.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full text-left p-3 rounded-lg transition group flex items-start gap-3 ${
                        activeLessonId === lesson.id ? 'bg-[#8B4513]/10 border-l-4 border-[#8B4513]' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activeLessonId === lesson.id ? 'bg-[#8B4513] text-white' : 'bg-[#CD853F]/10 text-[#CD853F]'
                      }`}>
                        <i className={`fas ${lesson.icon} text-sm`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-medium ${activeLessonId === lesson.id ? 'text-[#8B4513]' : 'text-gray-700'}`}>
                          {lesson.title}
                        </h4>
                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <i className="far fa-clock"></i> {lesson.duration}
                        </div>
                      </div>
                      {activeLessonId === lesson.id && (
                        <div className="self-center">
                           <div className="w-2 h-2 rounded-full bg-[#8B4513] animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 px-2">Materiales de estudio</h3>
            {RESOURCES.map((resource, idx) => (
              <a 
                key={idx} 
                href={resource.link} 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition border border-transparent hover:border-[#CD853F]/20"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#CD853F]/10 rounded-lg flex items-center justify-center text-[#CD853F]">
                    <i className={`fas ${resource.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 leading-tight">{resource.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{resource.type} • {resource.meta}</p>
                  </div>
                </div>
              </a>
            ))}
            <div className="bg-amber-50 p-4 rounded-xl mt-6">
              <h5 className="text-amber-700 font-bold text-sm flex items-center gap-2 mb-2">
                <i className="fas fa-plus-circle"></i> Recursos Extras
              </h5>
              <p className="text-amber-800 text-xs leading-relaxed">
                Utiliza concordancias y diccionarios teológicos para profundizar en el significado de los términos hebreos originales.
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
