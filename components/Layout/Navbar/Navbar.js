// import React, { useContext } from "react";

import SocialLinks from "../SocialLinks/SocialLinks";
import ModeSwitch from "./ModeSwitch/ModeSwitch";
// import ThemeContext from "../../../store/ThemeContext";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // const themeCtx = useContext(ThemeContext);
  return (
    <div className={classes.container}>
      <div className={classes.socialLinks}>
        <SocialLinks />
      </div>
      <div className={classes.modeSwitch}>
        <ModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
