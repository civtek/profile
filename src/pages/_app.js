import '../styles/globals.css'
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} className='absolute top-0 z-100'/>
  )
}

export default MyApp
