import SearchbarView from "./searchbarView"
import SearchResultsView from "../SearchResult/searchResultView";
import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getMovieDetails} from "../../Utilities/dishSource";
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
    {promiseNoData(promiseState) || <SearchResultsView searchResultClass="searchResult" searchResults={promiseState.data}/>}
    </div>);
}