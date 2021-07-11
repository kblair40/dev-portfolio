import React from "react";
import classes from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.textColumn}>
          <h1 className="nameIntro">Kevin Blair</h1>
        </div>
        <div className={classes.textColumn}>
          <p>Quis laboris Lorem ad eiusmod quis amet amet dolore Lorem.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
