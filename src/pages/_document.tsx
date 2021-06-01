import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

                    <meta name='description' content='Task list application where you can add, remove or mark them as completed.' />
                    <meta name='keywords' content='todo productivity tasks' />

                    <link rel='manifest' href='/manifest.json' />

                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <link rel="icon" href="favicon.svg" />
                    <link rel="mask-icon" href="mask-icon.svg" color="#000000" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" />

                    <meta name="theme-color" content="#171923" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}