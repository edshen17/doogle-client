import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/default-layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
  </Provider>
}

export default MyApp
