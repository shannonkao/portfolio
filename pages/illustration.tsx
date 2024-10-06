import type { NextPage } from 'next'
import Grid from '../components/Grid'
import styles from '../styles/home.module.css'
import { illustrations, mobileIllustrations } from '../data/illustrations'
import Header from '../components/Header'
import useMediaQuery from '../hooks/useMediaQuery'

const Illustration: NextPage = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Grid columns={isMobile ? mobileIllustrations: illustrations} />
        </div>
      </main>
    </div>
  )
}

export default Illustration
