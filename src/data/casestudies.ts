import type { CaseStudyData } from '../types'

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'project-aurora',
    role: '',           // Mi rol en el proyecto
    team: '',           // Con quién colaboré
    context: '',        // Por qué inicié este proyecto y qué necesidad quise atender
    problem: '',        // El problema que quise resolver
    process: [
      {
        type: 'text',
        title: 'Investigación',
        content: '',    // Cómo levanté información y qué métodos usé
      },
      {
        type: 'text',
        title: 'Diseño',
        content: '',    // Cómo pasé de bocetos a prototipo y qué decisiones tomé
      },
      {
        type: 'text',
        title: 'Desarrollo',
        content: '',    // Cómo lo implementé y qué retos técnicos enfrenté
      },
    ],
    results: '',        // Qué logré y qué aprendí
    images: [],         // Rutas de imágenes del proceso
  },
  {
    slug: 'atlas-core',
    role: '',
    team: '',
    context: '',
    problem: '',
    process: [
      {
        type: 'text',
        title: 'Investigación',
        content: '',
      },
      {
        type: 'text',
        title: 'Diseño',
        content: '',
      },
      {
        type: 'text',
        title: 'Desarrollo',
        content: '',
      },
    ],
    results: '',
    images: [],
  },
  {
    slug: 'sportcampus',
    role: '',           // Ej: "UX/UI Designer & Developer"
    team: '',           // Ej: "Proyecto individual" o con quién colaboré
    context: '',        // Por qué inicié este proyecto y qué necesidad detecté en el entorno universitario
    problem: '',        // El problema que quise resolver y qué faltaba en el ecosistema deportivo universitario
    process: [
      {
        type: 'text',
        title: 'Investigación',
        content: '',    // Cómo levanté información: entrevistas que hice, encuestas, apps que analicé como referencia
      },
      {
        type: 'text',
        title: 'Análisis competitivo',
        content: '',    // Apps que analicé como referencia, qué hacen bien y qué oportunidades de diferenciación encontré
      },
      {
        type: 'text',
        title: 'Usuarios y hallazgos',
        content: '',    // A quién diseñé, qué pain points encontré y qué aprendí de los usuarios
      },
      {
        type: 'text',
        title: 'Arquitectura de información',
        content: '',    // Cómo estructuré la navegación y los flujos principales que definí
      },
      {
        type: 'text',
        title: 'Wireframes y prototipado',
        content: '',    // Cómo pasé de bocetos de baja fidelidad al prototipo final y qué decisiones tomé en el camino
      },
      {
        type: 'text',
        title: 'Sistema de diseño',
        content: '',    // La paleta, tipografía y componentes que definí para mantener consistencia
      },
      {
        type: 'text',
        title: 'Pruebas de usabilidad',
        content: '',    // Con quién probé el prototipo, qué tareas les pedí hacer y qué fricción encontraron
      },
      {
        type: 'text',
        title: 'Iteraciones',
        content: '',    // Qué cambié después de las pruebas y por qué, mostrando cómo evolucionó el diseño
      },
      {
        type: 'text',
        title: 'Desarrollo',
        content: '',    // Cómo lo implementé con React Native, qué decisiones técnicas tomé y qué retos enfrenté
      },
    ],
    results: '',        // Qué logré, qué aprendí y cuáles son los próximos pasos que planeo dar
    images: [],
  },
  {
    slug: 'cell-ar',
    role: '',
    team: '',
    context: '',
    problem: '',
    process: [
      {
        type: 'text',
        title: 'Investigación',
        content: '',
      },
      {
        type: 'text',
        title: 'Diseño',
        content: '',
      },
      {
        type: 'text',
        title: 'Desarrollo',
        content: '',
      },
    ],
    results: '',
    images: [],
  },
]
