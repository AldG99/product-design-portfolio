import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'cell-ar',
    title: 'Cell-AR',
    description:
      'App educativa en realidad aumentada para aprender biología celular con modelos 3D interactivos, enfocada en un aprendizaje inmersivo y natural.',
    category: 'Mobile',
    year: 2024,
    period: 'Diciembre 2023 — Mayo 2024',
    endDate: '2024-05',
    cover: new URL('../assets/images/covers/cover-cell-ar.jpg', import.meta.url)
      .href,
    tags: ['Unity', 'AR', 'UX/UI'],
  },
  {
    id: '2',
    slug: 'sportcampus',
    title: 'SportCampus',
    description:
      'App móvil para deportes universitarios, con equipos, estadísticas y eventos multimedia, pensada para una experiencia clara y funcional.',
    category: 'Mobile / Web App',
    year: 2025,
    period: 'Mayo — Julio 2025',
    endDate: '2025-07',
    cover: new URL(
      '../assets/images/covers/cover-sportcampus.jpg',
      import.meta.url
    ).href,
    tags: ['React Native', 'UX/UI', 'Mobile'],
  },
  {
    id: '3',
    slug: 'atlas-core',
    title: 'Atlas Core',
    description:
      'Aplicación web SaaS B2B que simplifica la gestión de pedidos para pequeños negocios, con una interfaz intuitiva y centrada en el usuario.',
    category: 'Web App',
    year: 2026,
    period: 'Enero — Abril 2026',
    endDate: '2026-04',
    cover: '',
    tags: ['React', 'Vite', 'UX/UI'],
  },
  {
    id: '4',
    slug: 'project-aurora',
    title: 'Project Aurora',
    description:
      'Una experiencia que hace que compartir contenido sea claro, útil y sin lo innecesario, diseñada para descubrir, aprender y aportar.',
    category: 'Mobile',
    year: 2025,
    period: 'Junio 2025 — Presente',
    endDate: '9999-12',
    cover: '',
    tags: ['React Native', 'UX/UI', 'Mobile'],
  },
];
