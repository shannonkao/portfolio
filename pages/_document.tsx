import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <noscript>Shannon is a Seattle-based artist interested in exploring the intersection of natural and built environments through multidisciplinary practice, with a focus on book-making, print, and digital interfaces. They co-operate the small risograph press snack break studio.</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}