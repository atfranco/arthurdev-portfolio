import '@/styles/globals.css'
import '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {

  return <Layout>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"></script>
         <Component {...pageProps} />
         </Layout>
}
