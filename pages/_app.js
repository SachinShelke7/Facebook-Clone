import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <provider session={pageProps.session}>
    <Component {...pageProps} />
  </provider>
  )
}

export default MyApp