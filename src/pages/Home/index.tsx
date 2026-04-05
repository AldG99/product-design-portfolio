import { useSEO } from '../../hooks/useSEO'
import Hero from '../../sections/Hero'
import Work from '../../sections/Work'
import About from '../../sections/About'
import Contact from '../../sections/Contact'

export default function Home() {
  useSEO({ title: 'Alfredo García — Desarrollador & Diseñador UX/UI' })

  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  )
}
