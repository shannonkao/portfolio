import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/future/image'

import styles from '../../styles/home.module.css'
import { comics } from '../../data/comics'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'desire' } },
      { params: { id: 'meander' } },
      { params: { id: 'still' } },
    ],
    fallback: false
  }
}

const Comic: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const info = comics.find(el => el.id == id);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {info?.paths.map(path => <div key={path} className={styles["comic-page"]}>
            <Image
                src={path}
                width="0"
                height="0"
                sizes="100vw"
                alt=""
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
            />
        </div>)}
      </main>
    </div>
  )
}

export default Comic
