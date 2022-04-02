import type { AppProps } from 'next/app'
import Head from 'next/head'
import './global.scss'

function Olympus({ Component, pageProps }: AppProps) {
  console.log('a');
  return (
    <>
      <Head>
        <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Olympus
