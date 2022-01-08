import React from 'react';
import type { AppProps } from 'next/app';
import '../assets/css/index.scss';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
};
export default MyApp;
