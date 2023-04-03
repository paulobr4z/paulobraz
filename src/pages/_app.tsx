import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'

import ReactGA from "react-ga";

const TRACKING_ID = "G-QK2DB5G9KR";
ReactGA.initialize(TRACKING_ID);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
