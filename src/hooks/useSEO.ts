import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
}

const BASE_TITLE = 'Alfredo García — Desarrollador & Diseñador UX/UI'
const BASE_DESCRIPTION = 'Portfolio de Alfredo García. Desarrollo interfaces con React y React Native, combinando diseño UX/UI e investigación de usuarios.'

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} — Alfredo García`
    const desc = description ?? BASE_DESCRIPTION

    // Primary
    document.title = fullTitle
    setMeta('meta[name="description"]', desc)

    // Open Graph
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', desc)

    // Twitter / X
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', desc)

    return () => {
      document.title = BASE_TITLE
      setMeta('meta[name="description"]', BASE_DESCRIPTION)
      setMeta('meta[property="og:title"]', BASE_TITLE)
      setMeta('meta[property="og:description"]', BASE_DESCRIPTION)
      setMeta('meta[name="twitter:title"]', BASE_TITLE)
      setMeta('meta[name="twitter:description"]', BASE_DESCRIPTION)
    }
  }, [title, description])
}
