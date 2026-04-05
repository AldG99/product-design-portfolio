import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import styles from './Footer.module.scss'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ad-g099/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/AldG99', icon: FiGithub },
  { label: 'Behance', href: 'https://www.behance.net/alfredogarcia99', icon: SiBehance },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Alfredo García
        </p>
        <div className={styles.socials}>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
