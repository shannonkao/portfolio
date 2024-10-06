import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Header from '../components/Header'
import useMediaQuery from '../hooks/useMediaQuery'

const Contact: NextPage = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <div className={styles.contact}>
            <span>me at shannonkao.com</span>
            <span>Tumblr: <a href="https://mellific.tumblr.com/" target="_blank" rel="noreferrer">@mellific</a></span>
            <span>Twitter: <a href="https://twitter.com/mellifics" target="_blank" rel="noreferrer">@mellifics</a></span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
