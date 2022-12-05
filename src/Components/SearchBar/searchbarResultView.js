function SearchResultsView(props){
    return(<div class= {props.searchResultClass} >{renderDishImage(props)}</div>);
}
    function renderDishImage(props){
        function searchResultCB(searchResult){
          function searchResultsClickACB(){
            //window.location.hash ="#details"
            props.customClickEvent(searchResult)
            console.log("image clicked");
          }
          return <span key={searchResult.id} class= "searchResult" onClick={searchResultsClickACB}>
          <img class ="image"src={"https://image.tmdb.org/t/p/w500/"+searchResult.poster_path}  alt="img" height="150"/>
          <span>Rating: {searchResult.vote_average}</span><div >{searchResult.title}</div></span>
      
        }
        return props.searchResults.map(searchResultCB)
      }
      
      export default SearchResultsView;
