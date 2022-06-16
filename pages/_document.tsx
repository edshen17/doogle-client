import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Search for dog pictures!" />
        <meta property="og:url" content="https://www.byeindonesia.com/" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Doogle"/>
        <meta property="og:description" content="Search for dog pictures!"/>
        <meta property="og:image" content=""/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="byeindonesia.com"/>
        <meta property="twitter:url" content="https://www.byeindonesia.com/"/>
        <meta name="twitter:title" content="Doogle"/>
        <meta name="twitter:description" content="Search for dog pictures!"/>
        <meta name="twitter:image" content=""/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}