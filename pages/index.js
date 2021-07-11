import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AvatarHead from "../components/Avatar/Head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Blair</title>
        <meta
          name="description"
          content="Kevin Blair's web development portfolio"
        />
      </Head>

      <AvatarHead />
    </div>
  );
}
