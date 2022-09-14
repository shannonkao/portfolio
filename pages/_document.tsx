import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <noscript>Shannon is a Seattle-based comic artist and illustrator who is interested in uncanny places and odd stories.</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}