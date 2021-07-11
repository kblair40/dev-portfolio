import React from "react";

import classes from "./Head.module.css";
import Backdrop from "./Background/Backdrop";
import Eyes from "./Eyes";
import Nose from "./Nose";
import Hair from "./Hair";
import Ears from "./Ears";
import Mouth from "./Mouth";
import Neck from "./Neck";
import Body from "./Body";

const Head = () => {
  return (
    <Backdrop>
      <div className={classes.head}>
        <div className={classes.hairContainer}>
          <Hair />
        </div>
        <div className={classes.earsContainer}>
          <Ears />
        </div>
        <div className={classes.eyesContainer}>
          <Eyes />
        </div>
        <div className={classes.noseContainer}>
          <Nose />
        </div>
        <div className={classes.mouthContainer}>
          <Mouth />
        </div>
        <div className={classes.neckContainer}>
          <Neck />
        </div>
        <div className={classes.bodyContainer}>
          <Body />
        </div>
      </div>
    </Backdrop>
  );
};

export default Head;
