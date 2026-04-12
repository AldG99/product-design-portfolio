import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.scss'

const navLinks = [
  { label: 'Trabajo', href: '/#work' },
  { label: 'Sobre mí', href: '/#about' },
  { label: 'Contacto', href: '/#contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.name} onClick={handleLogoClick}>
          <img src={logo} alt="Alfredo García" className={styles.logo} draggable={false} />
        </Link>
        <nav className={styles.nav}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${styles.link} ${!isHome ? styles.muted : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
