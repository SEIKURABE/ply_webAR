import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
}
