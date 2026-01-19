
import React, { useState } from 'react';
import { ContentBlock } from '../types';

export const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'heading':
      // Fix: Use a specific string union for dynamic tags to avoid JSX namespace issues and ensure it's a valid intrinsic element.
      const level = block.level || 2;
      const Tag = `h${level}` as 'h2' | 'h3' | 'h4';
      
      // Fix: Use a typed record for heading classes to ensure safe property access and avoid indexing errors.
      const headingClasses: Record<number, string> = {
        2: "text-3xl font-bold text-[#8B4513] border-b-2 border-[#CD853F] pb-2 mb-6 mt-8",
        3: "text-2xl font-semibold text-[#A0522D] mb-4 mt-6",
        4: "text-xl font-medium text-[#CD853F] mb-3"
      };
      
      return <Tag className={headingClasses[level]}>{block.text}</Tag>;

    case 'paragraph':
      return <p className="text-gray-700 leading-relaxed mb-4 text-lg">{block.text}</p>;

    case 'note':
      return (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
          <div className="flex items-center gap-2 text-amber-700 font-semibold mb-1">
            <i className="fas fa-lightbulb"></i> Nota importante
          </div>
          <p className="text-amber-900 italic">{block.text}</p>
        </div>
      );

    case 'video':
      return (
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg mb-8">
          <iframe 
            className="absolute top-0 left-0 w-full h-full border-0"
            src={block.src} 
            allowFullScreen
          ></iframe>
        </div>
      );

    case 'accordion':
      return <Accordion items={block.items || []} />;

    case 'quiz':
      return <QuizBlock question={block.question!} options={block.options!} explanation={block.explanation} />;

    case 'slideshow':
      return <Slideshow items={block.items || []} />;

    case 'list':
      return (
        <ul className="list-none space-y-2 mb-6">
          {block.items?.map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <i className="fas fa-check-circle text-[#CD853F] mt-1 text-sm"></i>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div className="overflow-x-auto mb-8 shadow-sm rounded-lg">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-[#8B4513] text-white">
              <tr>
                {block.headers?.map((h, i) => <th key={i} className="px-6 py-3">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {row.map((cell, j) => <td key={j} className="px-6 py-4">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
};

const Accordion: React.FC<{ items: any[] }> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-3 mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden">
          <button 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="font-semibold text-gray-800">{item.title}</span>
            <i className={`fas fa-chevron-down transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}></i>
          </button>
          {openIdx === idx && (
            <div className="px-6 py-4 bg-white text-gray-700 border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const QuizBlock: React.FC<{ question: string, options: any[], explanation?: string }> = ({ question, options, explanation }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-white border-2 border-dashed border-[#CD853F] p-8 rounded-2xl mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-6">{question}</h4>
      <div className="space-y-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => !showResult && setSelected(idx)}
            className={`w-full p-4 rounded-xl text-left transition flex items-center gap-3 ${
              selected === idx ? 'bg-[#8B4513] text-white' : 'bg-gray-100 hover:bg-gray-200'
            } ${showResult && opt.isCorrect ? 'bg-green-600 text-white' : ''} ${showResult && selected === idx && !opt.isCorrect ? 'bg-red-600 text-white' : ''}`}
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center font-bold">
              {String.fromCharCode(65 + idx)}
            </span>
            {opt.text}
          </button>
        ))}
      </div>
      {!showResult ? (
        <button 
          onClick={() => selected !== null && setShowResult(true)}
          className="mt-6 bg-[#8B4513] text-white px-8 py-3 rounded-full font-bold hover:bg-[#A0522D] transition shadow-lg disabled:opacity-50"
          disabled={selected === null}
        >
          Verificar respuesta
        </button>
      ) : (
        <div className="mt-6 p-4 rounded-lg bg-gray-100">
          <p className="font-bold mb-2">{options[selected!].isCorrect ? '¡Excelente!' : 'Sigue intentándolo.'}</p>
          <p className="text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  );
};

const Slideshow: React.FC<{ items: any[] }> = ({ items }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
      <img src={items[current].image} alt="Slide" className="w-full h-80 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
        <p className="text-lg font-medium">{items[current].caption}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            {items.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}></div>
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={() => setCurrent(prev => (prev === 0 ? items.length - 1 : prev - 1))} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => setCurrent(prev => (prev === items.length - 1 ? 0 : prev + 1))} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
