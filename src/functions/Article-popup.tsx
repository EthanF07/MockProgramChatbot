import React from "react";
import ReactDOM from "react-dom";

// Get a hook function
const {useState} = React;


const [visible, setVisible] = useState(false);

export default function Article_Popup () {
    const [visible, setVisible] = useState(false);
  
    return (
      <div>
        <p>Button</p>
        
        <button onClick={() => setVisible(!visible)}>
          visibility : {!visible ? "hidden" : "showing"}
        </button>
        <div className = "container min-w-70 max-w-2xl min-h-80 w-85 h-128 box-border border-4 bg-article-blue col-span-3"></div>
      </div>
    );
  };
