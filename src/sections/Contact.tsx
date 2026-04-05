import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.scss'

interface LinkItem {
  label: string
  href: string
  icon: IconType
}

const links: LinkItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ad-g099/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/AldG99', icon: FiGithub },
  { label: 'Behance', href: 'https://www.behance.net/alfredogarcia99', icon: SiBehance },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className={styles.contact} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={`${styles.label} fade-up ${inView ? 'in-view' : ''}`}>
            Contacto
          </p>
          <h2 className={`${styles.title} fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p className={`${styles.text} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
            Estoy disponible para proyectos freelance y posiciones full-time.
            Escríbeme y hablamos.
          </p>
        </div>

        <div className={`${styles.right} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
          <ul className={styles.links}>
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.linkLeft}>
                    <Icon size={16} />
                    {label}
                  </span>
                  <span className={styles.arrow}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
