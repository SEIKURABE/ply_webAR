import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className='menu'>
        <Link className='alink' href='/'>
          Ply
        </Link>
        <Link className='alink' href='PlyAnimation'>
          PlyAnimation
        </Link>
        <Link className='alink' href='Spz'>
          Spz
        </Link>
        <Link className='alink' href='SpzAnimation'>
          SpzAnimation
        </Link>
        <Link className='alink' href='WebXR'>
          WebXR
        </Link>
      </div>
    </>
  );
}
