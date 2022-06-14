import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/default-layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}

export default MyApp
