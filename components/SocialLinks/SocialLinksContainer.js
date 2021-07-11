import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import classes from "./SocialLinksContainer.module.css";

const SocialLinksContainer = () => {
  return (
    <div className={classes.container}>
      <a href="https://www.github.com/kblair40" target="blank">
        <GitHubIcon className={classes.icon} fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-blair-74525935" target="blank">
        <LinkedInIcon className={classes.icon} fontSize="large" />
      </a>
      {/* <div className={classes.linksContainer}></div> */}
    </div>
  );
};

export default SocialLinksContainer;
