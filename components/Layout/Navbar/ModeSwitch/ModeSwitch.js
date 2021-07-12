import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import MoonIcon from "@material-ui/icons/Brightness3";
import classNames from "classnames";

import ThemeContext from "../../../../store/ThemeContext";
import classes from "./ModeSwitch.module.css";

const ModeSwitch = () => {
  const themeCtx = useContext(ThemeContext);

  const handleClick = () => {
    themeCtx.toggleTheme();
  };

  return (
    <div className={classes.container}>
      <IconButton
        classes={{ root: classes.switch }}
        onClick={handleClick}
        disableRipple
      >
        {themeCtx.isDarkMode ? (
          <WbSunnyIcon className={classes.sun} />
        ) : (
          <MoonIcon className={classes.moon} />
        )}
      </IconButton>
    </div>
  );
};

export default ModeSwitch;
