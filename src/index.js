
// this is a stub for TW3.5 bootstraping. It helps with a few lab specifics
import React from "react";
import {render} from "react-dom";


// needed for View JSX. In a React project you can use a React import in each View instead
window.React= React;

import firebase from "firebase/app";
import "firebase/database";

// needed for plugging in a "mock" firebase for testing. In the project simply import firebase where needed, as above
window.firebase=firebase;

// TODO import navigation
//require("../views/navigation.js").default;


// using require() instead of import, for the above assignments to take effect before ReactRoot is loaded
//const ReactRoot=require("/src/reactjs/ReactRoot.js").default;

// TODO render ReactRoot into the "root" div
render(
    <div id="root">hej</div>,
    document.getElementById('root')
);
