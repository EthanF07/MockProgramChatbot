import React from "react";
import ReactDOM from "react-dom";

// Get a hook function


let status = false;
export default function Article_Popup (props: {Boolean: boolean}) {
  let style;
  status = props.Boolean;
  
    return (
      <div>
        <div className = {"min-w-70 max-w-2xl min-h-80 w-85 h-128 article" + (status ? 'visible' : 'hidden')}></div>
      </div>
    );
  };
