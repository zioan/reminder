import React from "react";
import styles from "./button.module.css";

export default function Button(props) {
  let myClick = function () {
    alert("yopu clicked the button!");
  };
  return (
    <>
      <h1 className={styles.customHeader}>Testing</h1>
      <button id={props.id} className={props.className} onClick={myClick}>
        Press Me
      </button>
    </>
  );
}
