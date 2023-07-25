import React from "react";
import { Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import styles from "./styles/videoplayer.module.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={styles.title}>
        <Typography className={styles.font} variant="h2" align="center">
          DA Video
        </Typography>
      </div>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
