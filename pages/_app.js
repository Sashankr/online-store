import "../styles/globals.css";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <NextNProgress height={2} color="#4338C9" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
