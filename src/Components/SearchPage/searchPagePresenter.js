import React from "react";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {searchMovies} from "../../Utilities/dataSource";
import SearchResultsView from "../SearchResult/searchResultView";
export default
function SearchPage(props){
    const [searchQuery, setSearchQuery] = React.useState(props.model.searchQuery);
    const [promiseState]= React.useState({});
    const [, reRender]= React.useState(); 

    function notifyACB(){ reRender(new Object()); }

    function observerACB() {
        setSearchQuery(props.model.searchQuery);
    }
    
        


    function componentWasCreatedACB(){   //   1. the component has been created
        console.log("searchPagePresenter created!");
        props.model.addObserver(observerACB)
        function isTakenDownACB(){          //  2. the component is being taken down
             console.log("searchPagePresenter is dying");
             props.model.removeObserver(observerACB)
        }
        return isTakenDownACB;
     }
     React.useEffect( componentWasCreatedACB, [] );  // empty array!*/

    return (<div></div>);
}