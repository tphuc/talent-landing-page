import { ToastProvider } from '../components/Toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ToastProvider>
    <Component {...pageProps} />
  </ToastProvider>
}

export default MyApp
