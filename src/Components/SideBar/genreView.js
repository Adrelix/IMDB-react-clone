function GenreView(props){
    console.log(props);
    function searchResultCB(item){
        function searchResultsClickACB(){
          console.log("image clicked");
        }
        return <span key={item.id} class= "searchResult" onClick={searchResultsClickACB}>
        <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} height="150"/><div >{item.title === undefined ? item.name : item.title}</div></span>
    }
    return (
        <div>
            {props.genreResults.map(searchResultCB)}
        </div>
    )
}

export default GenreView;