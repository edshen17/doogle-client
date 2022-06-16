import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Head>
      <title>Doogle</title>
    </Head>
    <div className="flex flex-col h-screen">
      <Navbar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
      <Footer />
    </div>
  </Provider>
}

export default MyApp
