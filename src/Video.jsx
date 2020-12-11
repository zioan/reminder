import React from "react";
import styles from "./Video.module.css";

export default function Video(props) {
  return (
    <>
      <h2 className={`text-center ${styles.videoTitle}`}>{props.title}</h2>
      <iframe
        className={styles.iframe}
        src={props.url}
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
