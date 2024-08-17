import { Poppins, Montserrat, Merriweather } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import BackToTopButton from '@components/BackToTopButton';

const monte = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Салон краси Сміла',
  description: 'Салон краси перукарня місто Сміла',
};

export default function RootLayout({
  title = 'hairdresser',
  keywords = 'hair, hairdresser, salon, haircutter, nail, hair coloring, epilation',
  description = 'hairdresser services',
  children,
}) {
  return (
    <html lang="ua">
       <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
      <body className={monte.className}>
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
