import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Rimshad's Portfolio - Mobile and AI App Developer" />
        <title>Rimshad - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}