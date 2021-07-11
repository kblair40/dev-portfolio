import React from "react";
import classes from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.textSection}>
          <h1 className={classes.nameIntro}>Kevin Blair</h1>
        </div>
        <div className={classes.textSection}>
          <p>
            Quis laboris Lorem ad eiusmod quis amet amet dolore Lorem. Quis
            laboris Lorem ad eiusmod quis amet amet dolore Lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
