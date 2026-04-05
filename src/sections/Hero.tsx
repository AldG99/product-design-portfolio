import { FiArrowRight } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import styles from './Hero.module.scss'

export default function Hero() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="hero" className={styles.hero} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.inner}>
        <p className={`${styles.label} fade-up ${inView ? 'in-view' : ''}`}>
          Desarrollador & Diseñador UX/UI
        </p>
        <h1 className={`${styles.headline} fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
          Desarrollo interfaces<br />
          que tienen sentido.
        </h1>
        <p className={`${styles.tagline} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
          Desarrollo con React y React Native, creando interfaces intuitivas que combinan
          experiencia de usuario y soluciones digitales innovadoras, con enfoque en
          investigación de usuarios.
        </p>
        <p className={`${styles.tagline} fade-up fade-up-delay-3 ${inView ? 'in-view' : ''}`}>
          Me motiva resolver problemas y diseñar soluciones que dejen un impacto
          en la vida de las personas.
        </p>
        <a href="#work" className={`${styles.cta} fade-up fade-up-delay-4 ${inView ? 'in-view' : ''}`}>
          Ver trabajo
          <FiArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
