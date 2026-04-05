import styles from './Header.module.scss'

const navLinks = [
  { label: 'Trabajo', href: '#work' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.name}>
          AG
        </a>
        <nav className={styles.nav}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={styles.link}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
