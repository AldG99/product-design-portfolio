import { Link } from 'react-router-dom'
import { posts } from '../../data/posts'
import { useSEO } from '../../hooks/useSEO'
import { useInView } from '../../hooks/useInView'
import styles from './Blog.module.scss'

export default function Blog() {
  const { ref, inView } = useInView(0.1)

  useSEO({
    title: 'Blog',
    description: 'Artículos sobre diseño UX/UI, desarrollo y proceso creativo.',
  })

  return (
    <main className={styles.page}>
      <div className={styles.inner} ref={ref as React.RefObject<HTMLDivElement>}>
        <header className={styles.header}>
          <p className={`${styles.label} fade-up ${inView ? 'in-view' : ''}`}>
            Blog
          </p>
          <h1 className={`${styles.title} fade-up fade-up-delay-1 ${inView ? 'in-view' : ''}`}>
            Escritos
          </h1>
          <p className={`${styles.subtitle} fade-up fade-up-delay-2 ${inView ? 'in-view' : ''}`}>
            Notas sobre diseño, proceso y lo que voy aprendiendo.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className={`${styles.empty} fade-up fade-up-delay-3 ${inView ? 'in-view' : ''}`}>
            <p>Primer artículo en camino.</p>
            <Link to="/" className={styles.back}>← Volver al inicio</Link>
          </div>
        ) : (
          <ul className={styles.list}>
            {posts.map((post, i) => (
              <li
                key={post.slug}
                className={`${styles.item} fade-up ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${0.08 * (i + 3)}s` }}
              >
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <div className={styles.meta}>
                    <time className={styles.date}>{post.date}</time>
                    <div className={styles.tags}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.description}>{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
