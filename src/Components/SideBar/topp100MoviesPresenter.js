import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getTopRated} from "../../Utilities/dataSource";
import TopMoviesView from "./top100MoviesView";


export default
function TopMovies(){
    const [promiseState]= React.useState({});
    const [, reRender]= React.useState(); 
    console.log(promiseState);

    function notifyACB(){ reRender(new Object()); }

    if(!promiseState.promise){
        (resolvePromise(getTopRated(), promiseState, notifyACB))
    }
    return (<div>{promiseNoData(promiseState) || <TopMoviesView topResults={promiseState.data}/>}
    </div>);
}