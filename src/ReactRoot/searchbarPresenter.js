import SearchbarView from "../App/searchbarView"
import SearchResultsView from "../App/searchResultView";
import React from "react";
import resolvePromise from "../resolvePromise";
import promiseNoData from "../App/promiseNoData";
import {getMovieDetails} from "../dishSource";
export default
function Search(props){
    const [searchQuery, setSearchQuery] = React.useState();
    const [promiseState]= React.useState({});
    const [, reRender]= React.useState(); 

    if(!promiseState)
        (resolvePromise(getMovieDetails({query:""}), promiseState, notifyACB))

    function notifyACB(){ reRender(new Object()); }

    function textACB(param){
        setSearchQuery(param)
      }
    function searchButtonClickACB(){
        resolvePromise(getMovieDetails({query:searchQuery}),promiseState,notifyACB)
    }
    return (<div><SearchbarView onTextSetQuery={textACB} onClickSearch={searchButtonClickACB}/>
    {promiseNoData(promiseState) || <SearchResultsView searchResults={promiseState.data}/>}
    </div>);
}