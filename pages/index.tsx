import type { NextPage } from 'next'
import Gallery from '../components/Gallery'
import styles from '../styles/home.module.css'
import { illustrations, mobileIllustrations } from '../data/illustrations'
import { projects } from '../data/projects'
import Header from '../components/Header'
import useMediaQuery from '../hooks/useMediaQuery'

const Home: NextPage = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.gc}>
          {projects.map(p => {
              return <Gallery id={p.id} key={p.id} paths={p.paths} prefix="projects/" name={p.name} year={p.year} medium={p.medium} description={p.description} priority={p.priority} />
            })
          }
        </div>
        <div className={styles.toc}>
          <div className={styles.name}>shannon kao</div>
          <div>Shannon is a Seattle-based artist interested in exploring the intersection of natural and built environments through multidisciplinary practice, with a focus on book-making, print, and digital interfaces. They co-operate the small risograph press <a href="https://snackbreakstudio.net/" target="_blank" rel="noreferrer">snack break studio.</a></div>
          <ul>
            {projects.map(p => {
                return <li key={p.id}><a href={`#${p.id}0`}>{p.name}</a></li>
              })
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
