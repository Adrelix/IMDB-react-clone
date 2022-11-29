function SearchResultsView(props){
    return(<div>{renderDishImage(props.searchResults)}</div>);
}
    function renderDishImage(searchResults){
        function searchResultCB(searchResult){
          function searchResultsClickACB(){
            /*window.location.hash ="#details"
            customClickEvent(searchResult)*/
            console.log("image clicked");
          }
          return <span class= "searchResult" onClick={searchResultsClickACB}>
          <img src={"https://image.tmdb.org/t/p/w500/"+searchResult.poster_path}  alt="hej" height="150"/><div >{searchResult.title}</div></span>
      
        }
        return searchResults.results.map(searchResultCB)
      }
      
      export default SearchResultsView;
