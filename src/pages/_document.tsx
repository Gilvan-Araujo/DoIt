import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

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