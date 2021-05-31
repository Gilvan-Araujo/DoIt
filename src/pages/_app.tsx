import '../styles/global.scss';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>do.it - Tasklist</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
