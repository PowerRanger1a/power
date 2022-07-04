import "../styles/globals.css";
import Head from "next/head";

import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>Power Rangers Games</title>
        <link rel="icon" href="/logo.webp" />
<meta name="google-site-verification" content="gOZKET35DwJey0nC3VSfewa_FwOfSYJSgqvTNEUijHM" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Online power ranger games" />
      </Head>
      <div
        className="overflow-x-hidden main-bg"
        style={{ fontFamily: "Poppins, sans-serif", scrollBehaviour: "smooth" }}
      >
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
