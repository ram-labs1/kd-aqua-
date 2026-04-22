import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isAdminPage = router.pathname.startsWith('/admin');

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0369a1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {!isAdminPage && <Navbar />}

      <main>
        <Component {...pageProps} />
      </main>

      {!isAdminPage && <Footer />}
      {!isAdminPage && <FloatingButtons />}
    </>
  );
}