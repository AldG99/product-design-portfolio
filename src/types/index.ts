export interface Project {
  id: string
  title: string
  description: string
  category: string
  year: number
  period: string
  endDate: string // YYYY-MM, usar '9999-12' para proyectos en curso
  cover: string
  slug: string
  tags: string[]
}

export interface CaseStudySection {
  type: 'text' | 'image' | 'gallery' | 'metrics'
  title?: string
  content: string | string[]
}

export interface CaseStudyData {
  slug: string
  role: string
  team?: string
  context: string
  problem: string
  process: CaseStudySection[]
  results?: string
  images?: string[]
}
