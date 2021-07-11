import React from "react";
import Slide from "@material-ui/core/Slide";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <Slide in={true} direction="down" timeout={500}>
      <div className={classes.backdropContainer}>
        <div className={classes.circle}>{props.children}</div>
      </div>
    </Slide>
  );
};

export default Backdrop;
