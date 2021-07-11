import Head from "next/head";
import Slide from "@material-ui/core/Slide";
import styles from "../styles/Home.module.css";
import Avatar from "../components/Avatar/Head";
import HomeContent from "../components/Content/HomeContent";
export default function Home() {
  return (
    <Slide in={true} appear={true} direction="down" timeout={600}>
      <div>
        <Head>
          <title>Kevin Blair</title>
          <meta
            name="description"
            content="Kevin Blair's web development portfolio"
          />
        </Head>
        <Avatar />
        <HomeContent />
      </div>
    </Slide>
  );
}
