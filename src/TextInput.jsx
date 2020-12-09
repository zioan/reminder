import React, { useState, useEffect, useRef } from "react";

let TextInput = () => {
  let [ourText, updateTextFunction] = useState("");

  //useEffect helps to render objects that normally needs to render later in the page

  let inputRef = useRef();

  useEffect(() => {
    //the above code do the same but the ref is a nice aproche and use less resources

    // document.querySelector("#textInputId").focus();
    inputRef.current.focus();
  });

  return (
    <>
      <h2>{ourText}</h2>
      <label id="findThis" htmlFor="textInput">
        Enter Text
      </label>
      <input
        ref={inputRef}
        id="textInputId"
        onChange={(e) => updateTextFunction(e.target.value)}
        type="text"
        name="textInput"
      />
    </>
  );
};

export default TextInput;
