import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

const BASE_TITLE = 'Alfredo García — Desarrollador & Diseñador UX/UI';
const BASE_DESCRIPTION = 'Portfolio de desarrollo y diseño UX/UI.';

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title === BASE_TITLE ? title : `${title} — Alfredo García`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description ?? BASE_DESCRIPTION);
    }
  }, [title, description]);
}
