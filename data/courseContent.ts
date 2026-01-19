
import { Module, Resource } from '../types';

export const RESOURCES: Resource[] = [
  {
    title: "Pentateuco - John B. Scott",
    type: "PDF",
    meta: "Libro completo de estudio",
    link: "https://drive.google.com/file/d/1edvFU58MqGr8sIqBupHHFOVXlymsddol/view?usp=sharing",
    icon: "fa-file-pdf"
  },
  {
    title: "Syllabus - Pentateuco Scott",
    type: "PDF",
    meta: "Guía académica",
    link: "https://drive.google.com/file/d/1p8vIQwEgdIEFyvUd0y-vND_OjgIO6WEa/view?usp=drive_link",
    icon: "fa-file-pdf"
  },
  {
    title: "Mapas Bíblicos",
    type: "Web",
    meta: "Geografía del AT",
    link: "https://sites.google.com/view/pentateucolts/lecci%C3%B3n-2/mapa-b%C3%ADblico",
    icon: "fa-map"
  }
];

export const MODULES: Module[] = [
  {
    id: "module1",
    title: "Introducción al Pentateuco",
    lessons: [
      {
        id: "lesson1",
        title: "Visión Panorámica",
        subtitle: "Comprendiendo los cimientos de la revelación divina",
        duration: "20 min",
        icon: "fa-video",
        bannerImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1200",
        blocks: [
          { type: 'heading', level: 2, text: 'Bienvenida al Curso' },
          { type: 'paragraph', text: 'El Pentateuco no es solo una colección de libros antiguos; es el fundamento de toda la teología bíblica. Aquí encontramos el origen del universo, la formación del pueblo de Dios y la entrega de la Ley.' },
          { type: 'video', src: "https://www.youtube.com/embed/HoF46_lzYuU" },
          { type: 'heading', level: 3, text: '¿Qué es el Pentateuco?' },
          { type: 'paragraph', text: 'La palabra "Pentateuco" proviene del griego "penta" (cinco) y "teuchos" (tomos o rollos). En la tradición judía, este conjunto se conoce como la Torá (Instrucción o Ley).' },
          { type: 'list', items: [
            'Génesis: El libro de los orígenes.',
            'Éxodo: El libro de la redención y la salida de Egipto.',
            'Levítico: El libro de la santidad y el culto.',
            'Números: El libro de las jornadas en el desierto.',
            'Deuteronomio: El libro de la repetición de la Ley.'
          ]},
          { type: 'note', text: 'Aunque son cinco rollos distintos, forman una unidad literaria y teológica indisoluble escrita principalmente por Moisés.' }
        ]
      },
      {
        id: "lesson2",
        title: "Autoría y Temas Centrales",
        subtitle: "Moisés como el legislador y los grandes ejes del texto",
        duration: "40 min",
        icon: "fa-book",
        bannerImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?auto=format&fit=crop&q=80&w=1200",
        blocks: [
          { type: 'heading', level: 2, text: 'La Autoría Mosaica' },
          { type: 'paragraph', text: 'La tradición bíblica y externa atribuye unánimemente la autoría a Moisés. El mismo Pentateuco afirma que Moisés escribió gran parte del contenido por orden divina.' },
          { type: 'accordion', items: [
            { title: 'Evidencias Internas', content: 'Éxodo 17:14, 24:4 y 34:27 mencionan explícitamente a Moisés escribiendo las palabras de Jehová. Además, el Nuevo Testamento se refiere frecuentemente a estos libros como "la Ley de Moisés".' },
            { title: 'Preparación de Moisés', content: 'Moisés estaba excepcionalmente calificado: fue educado en la corte de Egipto (la nación más avanzada de su tiempo), tuvo contacto directo con la revelación en el Sinaí y lideró al pueblo durante 40 años.' }
          ]},
          { type: 'heading', level: 2, text: 'Temas Teológicos Clave' },
          { type: 'paragraph', text: 'A lo largo de estos cinco libros, Dios revela Su carácter y Sus propósitos para la humanidad mediante tres ejes fundamentales:' },
          { type: 'table', headers: ['Tema', 'Descripción', 'Importancia'], rows: [
            ['El Pacto', 'La relación formal entre Dios y Su pueblo.', 'Base de la seguridad del creyente.'],
            ['La Santidad', 'Dios es santo y llama a Su pueblo a serlo.', 'Define la ética y el culto.'],
            ['La Soberanía', 'Dios controla la historia y las naciones.', 'Infunde confianza en Su providencia.']
          ]},
          { type: 'quiz', question: "¿Cuál es el nombre hebreo para el Pentateuco?", options: [
            { text: "Nevi'im", isCorrect: false },
            { text: "Torá", isCorrect: true },
            { text: "Ketuvim", isCorrect: false }
          ], explanation: "La Torá significa 'Enseñanza' o 'Instrucción', reflejando que el propósito de estos libros es guiar al pueblo en el camino de Dios." }
        ]
      }
    ]
  },
  {
    id: "module2",
    title: "Génesis: Los Orígenes del Pueblo de Dios",
    lessons: [
      {
        id: "lesson4",
        title: "La Creación y los Orígenes (Gén 1-11)",
        subtitle: "Bereshit: El comienzo de la historia de la salvación",
        duration: "45 min",
        icon: "fa-seedling",
        bannerImage: "https://images.unsplash.com/photo-1464802686167-b939a67a06a1?auto=format&fit=crop&q=80&w=1200",
        blocks: [
          { type: 'heading', level: 2, text: 'I. Introducción al Libro de Génesis' },
          { type: 'paragraph', text: 'Génesis es el libro de los comienzos: el comienzo del universo, del género humano, del pecado y de la promesa de redención. Su nombre en hebreo es "Bereshit", que significa "En el principio".' },
          { type: 'note', text: 'Sin Génesis, el resto de la Biblia carecería de fundamento. Aquí se presentan los problemas que la redención en Cristo viene a resolver.' },
          
          { type: 'heading', level: 3, text: 'Estructura de la Historia Primordial' },
          { type: 'table', headers: ['Evento', 'Referencia', 'Temática Clave'], rows: [
            ['La Creación', 'Caps. 1-2', 'Orden, propósito y bondad de Dios'],
            ['La Caída', 'Cap. 3', 'Rebelión humana y primera promesa mesiánica'],
            ['El Diluvio', 'Caps. 6-9', 'Juicio divino y preservación por gracia'],
            ['Torre de Babel', 'Cap. 11', 'Orgullo humano y dispersión de las naciones']
          ]},

          { type: 'heading', level: 3, text: 'II. La Creación del Mundo (Caps. 1 y 2)' },
          { type: 'paragraph', text: 'Dios crea "ex-nihilo" (de la nada) mediante Su Palabra. El clímax de la creación es el hombre, creado a imagen y semejanza de Dios (Imago Dei).' },
          { type: 'accordion', items: [
            { title: 'Diferencia entre Cap. 1 y Cap. 2', content: 'El capítulo 1 ofrece una visión panorámica y majestuosa de la creación cósmica. El capítulo 2 se enfoca en la creación del hombre y la mujer, resaltando su relación íntima con Dios y el diseño del matrimonio.' },
            { title: 'El Reposo Sabático', content: 'Dios no descansó por cansancio, sino para establecer un ritmo de vida y santificar el tiempo para la comunión con Su creación.' }
          ]},

          { type: 'heading', level: 3, text: 'III. La Caída y el Protoevangelio (Cap. 3)' },
          { type: 'paragraph', text: 'La tentación de la serpiente atacó la confianza en la bondad de Dios. Tras la caída, Dios pronuncia el primer anuncio del Evangelio en Génesis 3:15.' },
          { type: 'note', text: 'Génesis 3:15 es conocido como el Protoevangelio: la promesa de que la simiente de la mujer heriría la cabeza de la serpiente.' },

          { type: 'quiz', question: "¿Qué representa la túnica de pieles que Dios hizo para Adán y Eva?", options: [
            { text: "Un castigo adicional por su pecado", isCorrect: false },
            { text: "Un símbolo de la necesidad de sacrificio para cubrir el pecado", isCorrect: true },
            { text: "Un simple accesorio de moda de la época", isCorrect: false }
          ], explanation: "La muerte de un animal para cubrir la desnudez prefigura el sistema de sacrificios y, finalmente, el sacrificio perfecto de Cristo que cubre nuestros pecados." },

          { type: 'heading', level: 3, text: 'IV. Diluvio y Babel (Caps. 4-11)' },
          { type: 'paragraph', text: 'Vemos la expansión del pecado desde un asesinato familiar (Caín) hasta la corrupción mundial. Dios interviene con juicio (Diluvio) pero mantiene Su pacto con Noé, simbolizado por el arco iris.' },
          { type: 'slideshow', items: [
            { image: 'https://images.unsplash.com/photo-1543333995-a78439f7384a?auto=format&fit=crop&q=80&w=800', caption: 'El Arca de Noé: Tipo de Cristo como único medio de salvación frente al juicio.' },
            { image: 'https://images.unsplash.com/photo-1481142889578-df05d23c0d17?auto=format&fit=crop&q=80&w=800', caption: 'La Torre de Babel: El intento del hombre de llegar al cielo por sus propios medios.' }
          ]}
        ]
      },
      {
        id: "lesson5",
        title: "Los Patriarcas (Gén 12-50)",
        subtitle: "La historia de la fe: Abraham, Isaac, Jacob y José",
        duration: "55 min",
        icon: "fa-users",
        bannerImage: "https://images.unsplash.com/photo-1510133769068-ad0124395a70?auto=format&fit=crop&q=80&w=1200",
        blocks: [
          { type: 'heading', level: 2, text: 'V. El Ciclo de Abraham: El Padre de la Fe' },
          { type: 'paragraph', text: 'El llamado de Abraham en Génesis 12 marca un giro en la historia. Dios ya no trata con todas las naciones a la vez, sino que elige a un hombre para bendecir a todas las familias de la tierra.' },
          { type: 'list', items: [
            'Promesa de una gran nación (Descendencia).',
            'Promesa de una tierra (Canán).',
            'Promesa de bendición universal (Cristo).'
          ]},
          { type: 'accordion', items: [
            { title: 'El Pacto Abrahamico', content: 'Establecido en Gén 15 y 17. Es un pacto incondicional basado en la fidelidad de Dios. El signo del pacto fue la circuncisión.' },
            { title: 'El Sacrificio de Isaac', content: 'En Gén 22, la fe de Abraham es probada. Dios provee un carnero, enseñando que Él mismo proveerá el sacrificio (Jehová Jireh).' }
          ]},

          { type: 'heading', level: 2, text: 'VI. Isaac y Jacob: La Elección Soberana' },
          { type: 'paragraph', text: 'Isaac, el hijo de la risa, hereda la promesa. Sus hijos, Esaú y Jacob, muestran la soberanía de Dios en la elección. Jacob, a pesar de sus fallas, es transformado en Israel tras luchar con Dios.' },
          { type: 'note', text: 'Bet-el (Casa de Dios) y Peniel (Rostro de Dios) son hitos fundamentales en la vida de Jacob que marcan su transformación espiritual.' },

          { type: 'heading', level: 2, text: 'VII. José: Providencia y Preservación' },
          { type: 'paragraph', text: 'La historia de José ocupa los últimos capítulos de Génesis. No es solo un relato de éxito, sino una demostración de cómo Dios utiliza el mal humano para cumplir Sus propósitos salvíficos.' },
          { type: 'table', headers: ['Etapa de José', 'Circunstancia', 'Propósito de Dios'], rows: [
            ['En Canaán', 'Vendido por sus hermanos', 'Separación para un propósito'],
            ['En Egipto (Cárcel)', 'Acusado injustamente', 'Prueba de carácter'],
            ['En el Palacio', 'Gobernador de Egipto', 'Preservación de la vida'],
            ['Reencuentro', 'Perdón a sus hermanos', 'Reunificación de las 12 tribus']
          ]},

          { type: 'heading', level: 3, text: 'Conclusión de Génesis' },
          { type: 'paragraph', text: 'El libro termina con la muerte de Jacob y José en Egipto, pero con la esperanza puesta en el regreso a la Tierra Prometida. El escenario está listo para el gran Éxodo.' },

          { type: 'quiz', question: "¿Cuál es el versículo clave que resume la providencia de Dios en la vida de José?", options: [
            { text: "Génesis 1:1", isCorrect: false },
            { text: "Génesis 12:3", isCorrect: false },
            { text: "Génesis 50:20", isCorrect: true }
          ], explanation: "Génesis 50:20 dice: 'Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien... para mantener en vida a mucho pueblo'." }
        ]
      }
    ]
  }
];
