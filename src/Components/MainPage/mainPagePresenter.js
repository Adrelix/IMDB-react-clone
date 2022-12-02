import MainPageView from "./mainPageView"
import SearchResultsView from "../SearchResult/searchResultView";
import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getTopRated, getPopular} from "../../Utilities/dataSource";
export default
function MainPagePresenter(props){
    const [popularMovieState]=  React.useState(function initialSearchACB(){return getPopular()})
    const [topMovieState]=  React.useState(function initialSearchACB(){return getTopRated()})
    const [, reRender]= React.useState(); 
    React.useEffect( componentWasCreatedACB, [] ); 
    
    function componentWasCreatedACB(){  
        resolvePromise(getPopular(), popularMovieState, notifyACB)
        resolvePromise(getTopRated(), topMovieState, notifyACB)
        function isTakenDownACB(){           
       }
       return isTakenDownACB;    
    }
    if(!popularMovieState.promise)
        (resolvePromise(getPopular(), popularMovieState, notifyACB))
    if(!topMovieState.promise)
        (resolvePromise(getTopRated(), topMovieState, notifyACB))
   


    function notifyACB(){ reRender(new Object()); }


    return (<div><MainPageView
        popularMovieResult=
                {promiseNoData(popularMovieState) || 
                <SearchResultsView searchResultClass="mainPageResult" searchResults={popularMovieState.data}/>}
        topMovieResult=
                {promiseNoData(topMovieState) || 
                <SearchResultsView searchResultClass="mainPageResult" searchResults={topMovieState.data}/>}
    /></div>);
}