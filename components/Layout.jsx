'use client';

import Head from 'next/head';
import Header from './Header';

export default function Layout({
  title = 'hairdresser',
  keywords = 'hair, hairdresser, salon, haircutter, nail, hair coloring, epilation',
  description = 'hairdresser services',
  children,
}) {
  return (
    <div className='content'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}
