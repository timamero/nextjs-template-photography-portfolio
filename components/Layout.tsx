import React from 'react';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({pageTitle, pageDescription, children}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout