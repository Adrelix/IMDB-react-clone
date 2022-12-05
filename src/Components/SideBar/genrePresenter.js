import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getMovieByGenre} from "../../Utilities/dataSource";
import GenreView from "./genreView"

export default
function Genre(props){
    const [promiseState]=  React.useState({})
    const [, reRender]= React.useState(props.model.currentGenre); 
    React.useEffect( componentWasCreatedACB, [] ); 

    function observerACB(genre){
        console.log("test");
        console.log(genre);
        console.log("test");
        resolvePromise(getMovieByGenre(genre.currentGenre, genre.currentMedia), promiseState, notifyACB);
    }
    
    function componentWasCreatedACB(){ 
        props.model.addObserver(observerACB);
        function isTakenDownACB(){           
            console.log("genrePresenter is dying");
            props.model.removeObserver(observerACB)
        }
       return isTakenDownACB;    
    }
    function notifyACB(){ reRender(new Object()); }
    return (<div>{promiseNoData(promiseState) || <GenreView genreResults={promiseState.data}/>}
    </div>);
}