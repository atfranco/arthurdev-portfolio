import '@/styles/globals.css'
import '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {

  return <Layout>
        <NextNProgress
        color="#29D"
        startPosition={0.2}
        stopDelayMs={500}
        height={10}
        showOnShallow={true} />
         <Component {...pageProps} />
         </Layout>
}
