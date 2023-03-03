import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/globals.css'
import FooterBar from '../components/FooterBar';
//this is a first rendering for the app
//can add meta tag Navbar and footer in this file


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <React.Fragment>
      <Head>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

      </Head>
      <Navbar />
      <Component {...pageProps} />
      <FooterBar />
    </React.Fragment>
  )
}

export default MyApp
