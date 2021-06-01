import '../styles/global.scss';

import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>do.it - Tasklist</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
