import Head from "next/head";
import Slide from "@material-ui/core/Slide";
import classes from "../styles/Home.module.css";
import Avatar from "../components/Avatar/Head";
import HomeContent from "../components/Content/HomeContent";
import MenuDial from "../components/Layout/SpeedDial/MenuDial";

export default function Home() {
  return (
    <Slide in={true} appear={true} direction="down" timeout={600}>
      <div className={classes.homeContainer}>
        <div className={classes.bgOverlay}>
          <Head>
            <title>Kevin Blair</title>
            <meta
              name="description"
              content="Kevin Blair's web development portfolio"
            />
          </Head>
          <div className={classes.myName}>Kevin Blair</div>
          <Avatar />
          <HomeContent />
          <MenuDial />
        </div>
      </div>
    </Slide>
  );
}
