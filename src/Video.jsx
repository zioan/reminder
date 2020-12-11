import React from "react";
import styles from "./Video.module.css";
import Paragraph from "./Paragraph";

export default function Video(props) {
  return (
    <>
      <h2 className={`text-center ${styles.videoTitle}`}>{props.title}</h2>
      <iframe
        className={styles.iframe}
        src={props.url}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Paragraph text={props.text} />
    </>
  );
}
