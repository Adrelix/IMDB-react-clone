import SearchbarView from "./searchbarView"
import SearchbarResultsView from "./searchbarResultView";
import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {searchMovies} from "../../Utilities/dataSource";
import Show from "../../Utilities/show";


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
    function searchResultButtonACB(param){
        props.model.setCurrentMovie(param.id)
      }
    
    return (<div><SearchbarView onTextSetQuery={textACB} onClickSearch={searchButtonClickACB}/><Show hash="#search">
    {promiseNoData(promiseState) || <SearchbarResultsView searchResultClass="searchBarResult" searchResults={promiseState.data} customClickEvent ={searchResultButtonACB}/>}</Show>
    </div>);
}