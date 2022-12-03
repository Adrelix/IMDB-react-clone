import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getMovieByGenre} from "../../Utilities/dataSource";
import GenreView from "./genreView"

export default
function Genre(props){
    console.log(props);
    const [promiseState]=  React.useState(function initialSearchACB(){return getMovieByGenre(props.model.currentGenre)})
    const [, reRender]= React.useState(); 
    React.useEffect( componentWasCreatedACB, [] ); 
    
    function componentWasCreatedACB(){  
        resolvePromise(getMovieByGenre(props.model.currentGenre), promiseState, notifyACB)
        function isTakenDownACB(){           
            
        }
       return isTakenDownACB;    
    }
    function notifyACB(){ reRender(new Object()); }

    if(!promiseState.promise){
        (resolvePromise(getMovieByGenre(props.model.currentGenre), promiseState, notifyACB))
    }
    return (<div>{promiseNoData(promiseState) || <GenreView genreResults={promiseState.data}/>}
    </div>);
}