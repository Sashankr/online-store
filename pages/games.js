import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Head from "next/head";

const Games = () => {
  return (
    <div>
      <Head>
        <title>Online Store | Games</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <meta name="description" content="Generic Online Store Games Page" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Games;
