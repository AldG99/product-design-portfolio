import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.scss'

const navLinks = [
  { label: 'Trabajo', hash: 'work' },
  { label: 'Sobre mí', hash: 'about' },
  { label: 'Contacto', hash: 'contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${hash}`)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.name} onClick={handleLogoClick}>
          <img src={logo} alt="Alfredo García" className={styles.logo} draggable={false} />
        </Link>
        <nav className={styles.nav}>
          {navLinks.map(({ label, hash }) => (
            <a
              key={label}
              href={`/#${hash}`}
              className={`${styles.link} ${!isHome ? styles.muted : ''}`}
              onClick={(e) => handleNavClick(e, hash)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
