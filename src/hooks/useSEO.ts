import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  image?: string
}

const BASE_TITLE = 'Alfredo García — Desarrollador & Diseñador UX/UI'
const BASE_DESCRIPTION = 'Portfolio de Alfredo García. Desarrollo interfaces con React y React Native, combinando diseño UX/UI e investigación de usuarios.'

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export function useSEO({ title, description, image }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} — Alfredo García`
    const desc = description ?? BASE_DESCRIPTION
    const url = window.location.href

    // Primary
    document.title = fullTitle
    setMeta('meta[name="description"]', desc)

    // Open Graph
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', desc)
    setMeta('meta[property="og:url"]', url)
    if (image) setMeta('meta[property="og:image"]', image)

    // Twitter / X
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', desc)
    if (image) setMeta('meta[name="twitter:image"]', image)

    return () => {
      document.title = BASE_TITLE
      setMeta('meta[name="description"]', BASE_DESCRIPTION)
      setMeta('meta[property="og:title"]', BASE_TITLE)
      setMeta('meta[property="og:description"]', BASE_DESCRIPTION)
      setMeta('meta[property="og:url"]', window.location.origin)
      setMeta('meta[name="twitter:title"]', BASE_TITLE)
      setMeta('meta[name="twitter:description"]', BASE_DESCRIPTION)
    }
  }, [title, description, image])
}
