import Document, {Html, Head, Main, NextScript} from 'next/document'

//representa o arquivo index.html - tudo que for estatico
export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                rel="stylesheet"/>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
        </Head>
        <body>
          <Main /> {/** mostra o _app*/}
          <NextScript /> {/** scripts automarizados */}
        </body>
      </Html>
    )
  }
}