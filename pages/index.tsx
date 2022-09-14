import type { NextPage } from 'next'
import Grid from '../components/Grid'
import styles from '../styles/home.module.css'
import { illustrations } from '../data/illustrations'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Grid columns={illustrations} />
      </main>
    </div>
  )
}

export default Home
