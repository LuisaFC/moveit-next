import '../styles/global.css'

//O que sera reaproveitado por todas as paginas da aplicação
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
