import { useParams, Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { caseStudies } from '../../data/casestudies'
import { useSEO } from '../../hooks/useSEO'
import styles from './CaseStudy.module.scss'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const caseStudy = caseStudies.find((c) => c.slug === slug)

  useSEO({
    title: project ? project.title : 'Proyecto no encontrado',
    description: project?.description,
  })

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p>Proyecto no encontrado.</p>
        <Link to="/">← Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        <Link to="/" className={styles.back}>
          ← Volver
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.period}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className={styles.cover}>
          {project.cover && (
            <img src={project.cover} alt={project.title} />
          )}
        </div>

        {caseStudy && (
          <div className={styles.content}>

            {caseStudy.role && (
              <div className={styles.overview}>
                <div className={styles.overviewItem}>
                  <p className={styles.overviewLabel}>Rol</p>
                  <p className={styles.overviewValue}>{caseStudy.role}</p>
                </div>
                {caseStudy.team && (
                  <div className={styles.overviewItem}>
                    <p className={styles.overviewLabel}>Equipo</p>
                    <p className={styles.overviewValue}>{caseStudy.team}</p>
                  </div>
                )}
                <div className={styles.overviewItem}>
                  <p className={styles.overviewLabel}>Período</p>
                  <p className={styles.overviewValue}>{project.period}</p>
                </div>
              </div>
            )}

            {caseStudy.context && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Contexto</h2>
                <p className={styles.sectionText}>{caseStudy.context}</p>
              </div>
            )}

            {caseStudy.problem && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Problema</h2>
                <p className={styles.sectionText}>{caseStudy.problem}</p>
              </div>
            )}

            {caseStudy.process.map((step) => (
              step.content && (
                <div key={step.title} className={styles.section}>
                  {step.title && (
                    <h2 className={styles.sectionTitle}>{step.title}</h2>
                  )}
                  {typeof step.content === 'string' ? (
                    <p className={styles.sectionText}>{step.content}</p>
                  ) : (
                    step.content.map((item, i) => (
                      <p key={i} className={styles.sectionText}>{item}</p>
                    ))
                  )}
                </div>
              )
            ))}

            {caseStudy.results && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Resultados</h2>
                <p className={styles.sectionText}>{caseStudy.results}</p>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
  )
}
