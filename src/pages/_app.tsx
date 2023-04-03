import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
