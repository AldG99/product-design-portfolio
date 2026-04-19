import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useSEO } from '../../hooks/useSEO'
import styles from './NotFound.module.scss'

export default function NotFound() {
  useSEO({ title: 'Página no encontrada' })

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.text}>
          La página que buscas no existe o fue movida.
        </p>
        <Link to="/" className={styles.link}>
          <FiArrowLeft size={14} />
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
