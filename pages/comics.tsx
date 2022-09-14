import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Header from '../components/Header'
import List from '../components/List'
import { comics } from '../data/comics'

const Comics: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <List items={comics} />
      </main>
    </div>
  )
}

export default Comics
