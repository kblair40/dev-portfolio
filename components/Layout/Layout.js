import classes from "./Layout.module.css";
import { Fragment } from "react";

import SocialLinksContainer from "../SocialLinks/SocialLinksContainer";
const Layout = (props) => {
  return (
    <Fragment>
      <SocialLinksContainer />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
