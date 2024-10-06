import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/future/image'

import { comics } from '../../data/comics'
import Header from '../../components/Header'
import styles from '../../styles/comics.module.css'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'desire' } },
      { params: { id: 'fascinate' } },
      { params: { id: 'n2' } },
      { params: { id: 'meander' } },
      { params: { id: 'still' } },
      { params: { id: 'ebb' } },
      { params: { id: 'rot' } },
    ],
    fallback: false
  }
}

const Comic: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const info = comics.find(el => el.id == id);
  const spread = !!info?.spread;
  const cover = !!info?.cover;

  return (
    <div>
      <main className={`${styles.comic} ${spread ? styles.spread : ''}`}>
        <Header />
        {info?.paths.map(path => <div key={path} className={styles.page}>
            <Image
                src={path}
                width="0"
                height="0"
                sizes="100vw"
                alt=""
                style={{ height: '100%', width: 'auto'}}
            />
        </div>)}
      </main>
    </div>
  )
}

export default Comic
