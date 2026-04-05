import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import styles from './Work.module.scss'

const sortedProjects = [...projects].sort((a, b) =>
  b.endDate.localeCompare(a.endDate)
)

export default function Work() {
  const { ref, inView } = useInView()

  return (
    <section id="work" className={styles.work} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={`${styles.label} fade-up ${inView ? 'in-view' : ''}`}>
            Trabajo seleccionado
          </p>
          <h2 className={`${styles.title} fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
            Proyectos
          </h2>
        </div>
        <div className={styles.grid}>
          {sortedProjects.map((project, i) => (
            <div
              key={project.id}
              className={`fade-up ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
