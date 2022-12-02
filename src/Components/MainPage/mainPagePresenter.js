import MainPageView from "./mainPageView"
import SearchResultsView from "../SearchResult/searchResultView";
import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getTopRated, getMovieDetails} from "../../Utilities/dataSource";
export default
function MainPagePresenter(props){
    const [newMovieState]=  React.useState(function initialSearchACB(){return getMovieDetails("new")})
    const [topMovieState]=  React.useState(function initialSearchACB(){return getMovieDetails("top")})
    const [, reRender]= React.useState(); 
    React.useEffect( componentWasCreatedACB, [] ); 
    
    function componentWasCreatedACB(){  
        resolvePromise(getMovieDetails({query:"new"}), newMovieState, notifyACB)
        resolvePromise(getMovieDetails({query:"top"}), topMovieState, notifyACB)
        function isTakenDownACB(){           
       }
       return isTakenDownACB;    
    }
    if(!newMovieState)
        (resolvePromise(getMovieDetails({query:"new"}), newMovieState, notifyACB))
    if(!topMovieState)
        (resolvePromise(getTopRated({query:"top"}), topMovieState, notifyACB))
   


    function notifyACB(){ reRender(new Object()); }


    return (<div><MainPageView
        newMovieResult=
                {promiseNoData(newMovieState) || 
                <SearchResultsView searchResultClass="mainPageResult" searchResults={newMovieState.data}/>}
        topMovieResult=
                {promiseNoData(topMovieState) || 
                <SearchResultsView searchResultClass="mainPageResult" searchResults={topMovieState.data}/>}
    /></div>);
}