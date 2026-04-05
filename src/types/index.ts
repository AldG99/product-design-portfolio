export interface Project {
  id: string
  title: string
  description: string
  category: string
  year: number
  cover: string
  slug: string
  tags: string[]
}

export interface CaseStudy extends Project {
  role: string
  duration: string
  sections: CaseStudySection[]
}

export interface CaseStudySection {
  type: 'text' | 'image' | 'gallery' | 'metrics'
  content: string | string[]
}
