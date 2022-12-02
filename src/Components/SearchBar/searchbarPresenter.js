import SearchbarView from "./searchbarView"
import SearchResultsView from "../SearchResult/searchResultView";
import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {searchMovies} from "../../Utilities/dataSource";
export default
function Search(props){
    const [searchQuery, setSearchQuery] = React.useState();
    const [promiseState]= React.useState({});
    const [, reRender]= React.useState(); 

    if(!promiseState)
        (resolvePromise(searchMovies({query:""}), promiseState, notifyACB))

    function notifyACB(){ reRender(new Object()); }

    function textACB(param){
        setSearchQuery(param)
      }
    function searchButtonClickACB(){
        resolvePromise(searchMovies({query:searchQuery}),promiseState,notifyACB)
    }
    return (<div><SearchbarView onTextSetQuery={textACB} onClickSearch={searchButtonClickACB}/>
    {promiseNoData(promiseState) || <SearchResultsView searchResultClass="searchBarResult" searchResults={promiseState.data}/>}
    </div>);
}