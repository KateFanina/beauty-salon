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
  description:
    'Наш салон краси пропонує фарбування волосся різної складності, чоловічі, жіночі, дитячі стрижки, манікюр, педикюр, шугаринг ультразвукове очищення обличчя. Запишіться на консультацію ☎️ +38 063 1736533',
};

export default function RootLayout({
  title = metadata.title,
  keywords = 'волосся, перукар, салон краси, стрижка, нігті, фарбування волосся, епіляція, шугаринг',
  description = metadata.description,
  children,
}) {
  return (
    <html lang='uk'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='robots' content='index, follow' />
        <meta name="google-site-verification" content="3vHEHEdTP6r6N8vz4VkdC9ONrI8Mps_5XVQe3fKGppE" />
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
