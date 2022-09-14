import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/future/image'

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
    <div>
      <main style={ { padding: "2rem" } }>
        {info?.paths.map(path => <div key={path} style={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "38rem",
          marginBottom: "1rem"
        }}>
            <Image
                src={path}
                width="0"
                height="0"
                sizes="100vw"
                alt=""
                style={{ height: 'auto', width: 'auto', objectFit: 'contain', maxWidth: '90%' }}
            />
        </div>)}
      </main>
    </div>
  )
}

export default Comic
