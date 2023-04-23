import '@/styles/globals.css';
import '@/styles/Home.module.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {

  return <Layout>
        <NextNProgress
        options={{ easing: 'ease-out', speed: 800 }}
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
        showOnShallow={false} />
         <Component {...pageProps} />
         </Layout>
}
