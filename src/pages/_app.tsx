import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (<>
      <Toaster
      position="bottom-center"
      reverseOrder={false}
      />
      <Component {...pageProps} />
  </>)
}

export default MyApp
