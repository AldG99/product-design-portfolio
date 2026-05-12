export interface Post {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  tags: string[]
}

export const posts: Post[] = []
