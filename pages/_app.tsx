import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Shannon Kao</title>
      <meta name="description" content="Shannon is a Seattle-based artist interested in exploring the intersection of natural and built environments through multidisciplinary practice, with a focus on book-making, print, and digital interfaces. They co-operate the small risograph press snack break studio." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default App
