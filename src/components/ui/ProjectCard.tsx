import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import styles from './ProjectCard.module.scss'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link to={`/work/${project.slug}`} className={styles.card}>
      <div className={styles.cover}>
        {project.cover && (
          <img src={project.cover} alt={project.title} />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.period}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </Link>
  )
}
