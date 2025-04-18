import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* <Script
          src='https://aframe.io/releases/1.3.0/aframe.min.js'
          strategy='beforeInteractive'
        />

        <Script
          src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'
          strategy='beforeInteractive'
        /> */}
      </body>
    </Html>
  );
}
