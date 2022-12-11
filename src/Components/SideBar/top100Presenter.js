import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getTopRated} from "../../Utilities/dataSource";
import Top100View from "./top100View";

export default
function Top100(props){
    const [promiseState]=  React.useState({})
    const [, reRender]= React.useState(); 
    React.useEffect( componentWasCreatedACB, [] ); 

    if (!promiseState.promise) {
        resolvePromise(getTopRated(props.model.pageNumber, props.model.currentMediaType), promiseState, notifyACB);
    }
    function observerACB(){
        resolvePromise(getTopRated(props.model.pageNumber, props.model.currentMediaType) , promiseState, notifyACB);
    }
    function changePage(change){
        props.model.changePageNumber(change);
    }
    function componentWasCreatedACB(){
        console.log("top100Presenter created!");
        props.model.addObserver(observerACB);
        function isTakenDownACB(){           
            console.log("top100Presenter is dying");
            props.model.removeObserver(observerACB);
        }
       return isTakenDownACB;    
    }
    function notifyACB(){ reRender(new Object()); }
    return (<div>{promiseNoData(promiseState) || <Top100View top100Results={promiseState.data} page={props.model.pageNumber} onChangingPage={changePage}/>}
    </div>);
}