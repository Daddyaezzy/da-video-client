import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "../styles/videoplayer.module.css";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    // [theme.breakpoints.down("xs")]: {
    //   width: "300px",
    // },
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "20px",
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    // },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, stream, callEnded } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid className={styles.gridContainer}>
      {/* My Video */}
      {stream && (
        <Paper className={styles.paper}>
          <Grid item xs={12} md={6}>
            <Typography varient="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}

      {/* User's Video */}
      {callAccepted && !callEnded && (
        <Paper className={styles.paper}>
          <Grid item xs={12} md={6}>
            <Typography varient="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
