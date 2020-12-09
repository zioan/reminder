import React from "react";

export default function Button(props) {
  let myClick = function () {
    alert("yopu clicked the button!");
  };
  return (
    <>
      <button id={props.id} className={props.className} onClick={myClick}>
        Press Me
      </button>
    </>
  );
}
