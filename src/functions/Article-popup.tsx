import React from "react";
import ReactDOM from "react-dom";

// Get a hook function


let status: boolean = false;
export default function Article_Popup (props: any) {
  let style;
  status = props.popup;
  
    return (
      <div>
        <div className = {"min-w-70 max-w-2xl min-h-80 w-85 h-128 article" + (status ? 'visible' : 'hidden')}></div>
      </div>
    );
  };
