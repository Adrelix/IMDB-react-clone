import React from "react";


export default function Show(props){
    const [urlHash, setHash]=React.useState(window.location.hash);
    React.useEffect(componentWasCreatedACB, [] );  

    function componentWasCreatedACB(){   
        window.addEventListener("hashchange", hashUpdateACB)
        function isTakenDownACB(){                  
            window.removeEventListener("hashchange", hashUpdateACB)
       }
       return isTakenDownACB;    
    }


    function hashUpdateACB(){
        setHash(window.location.hash)
    }

    
    if(props.hash == urlHash){
        return props.children
    }
    else{
        return false
    }
    
}  