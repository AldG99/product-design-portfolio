import { useInView } from '../hooks/useInView'
import styles from './About.module.scss'

const skills = [
  'UX/UI Design',
  'UX Research',
  'Design Systems',
  'Prototyping',
  'Figma',
  'Usability Testing',
]

const tools = ['Figma', 'Miro', 'React', 'React Native', 'HTML / CSS', 'SCSS', 'Firebase', 'Supabase', 'Unity']

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className={styles.about} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={`${styles.label} fade-up ${inView ? 'in-view' : ''}`}>
            Sobre mí
          </p>
          <h2 className={`${styles.title} fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
            Desarrollador & Diseñador UX/UI con enfoque en claridad y propósito.
          </h2>
          <p className={`${styles.bio} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
            Soy desarrollador y diseñador UX/UI multidisciplinario que combina la
            sensibilidad del diseño centrado en el usuario con la solidez técnica
            del desarrollo.
          </p>
          <p className={`${styles.bio} fade-up fade-up-delay-3 ${inView ? 'in-view' : ''}`}>
            Para el equipo de GAKATI, diseñé y desarrollé soluciones centradas en el
            usuario, entregando funcionalidades de manera ágil por sprints.
          </p>
          <p className={`${styles.bio} fade-up fade-up-delay-3 ${inView ? 'in-view' : ''}`}>
            Acompaño todo el proceso, desde la investigación hasta la implementación,
            creando wireframes, prototipos y código para experiencias digitales
            intuitivas y funcionales.
          </p>
          <p className={`${styles.bio} fade-up fade-up-delay-3 ${inView ? 'in-view' : ''}`}>
            Estudié en la{' '}
            <a href="https://www.cs.buap.mx/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Facultad de Ciencias de la Computación de la Benemérita Universidad Autónoma de Puebla
            </a>
            , donde completé la Ingeniería en Tecnologías de la Información.
            Posteriormente, me formé en el programa{' '}
            <a href="https://www.credly.com/badges/c15aa494-4574-41d9-b97d-a862a9ccbeb6/public_url" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Google UX Design Professional
            </a>
            , donde adquirí experiencia en la interacción entre las personas y la
            tecnología, enfocándome en diseñar soluciones que realmente respondan
            a las necesidades de los usuarios.
          </p>
          <p className={`${styles.bio} fade-up fade-up-delay-4 ${inView ? 'in-view' : ''}`}>
            Gracias por tomarse el tiempo para visitar mi sitio.
          </p>
          <blockquote className={`${styles.quote} fade-up fade-up-delay-4 ${inView ? 'in-view' : ''}`}>
            <p>"One of the stated goals for the Macintosh project was that the computer
            should be friendly and appeal to non-technical users."</p>
            <cite>— Susan Kare</cite>
          </blockquote>
        </div>

        <div className={`${styles.right} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
          <div className={styles.block}>
            <p className={styles.blockLabel}>Especialidades</p>
            <ul className={styles.list}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.block}>
            <p className={styles.blockLabel}>Herramientas</p>
            <ul className={styles.list}>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
