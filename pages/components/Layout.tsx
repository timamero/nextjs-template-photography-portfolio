import React from 'react';
import Head from 'next/head';

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
      {children}
    </div>
  )
}

export default Layout