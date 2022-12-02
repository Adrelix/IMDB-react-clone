import React from "react";
export default
function Show(props){
 
  const [hashState, setHash]= React.useState(window.location.hash);
  function hashListenerACB(){setHash(window.location.hash)}

  function wasCreatedACB(){
    window.addEventListener("hashchange", hashListenerACB);
    function isTakenDownACB(){
      window.removeEventListener("hashchange", hashListenerACB);
    }
    return isTakenDownACB;
  }
  React.useEffect( wasCreatedACB, [] );  // empty array!
  return <div class ={hashState !== props.hash ? "hide": ""}>{props.children}</div>

  //return <div </div>
}
