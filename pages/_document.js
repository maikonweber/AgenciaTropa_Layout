import Document, { Html, Head, Main, NextScript } from "next/document"

class myDocument extends Document {
    render () {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta name="" content=" "/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300;400;500&family=Roboto:ital,wght@0,300;1,100&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        
        )

    }

}

export default myDocument