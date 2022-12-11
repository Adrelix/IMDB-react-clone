function Top100View(props){
    console.log(props);
    function searchResultCB(item){
        function searchResultsClickACB(){
          console.log("image clicked");
        }
        return <span key={item.id} class= "searchResult" onClick={searchResultsClickACB}>
        <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} height="150"/><div >{item.title === undefined ? item.name : item.title}</div></span>
    }
    function decreaseAmountCB() {
        console.log("User wants to subtract 1");
        props.onChangingPage(props.page-1);
    }
    function increaseAmountCB() {
        console.log("User wants to add 1");
        props.onChangingPage(props.page+1);
    }
    return (
      <div class="genre-results">
        {props.top100Results.map(searchResultCB)}
        <div>
          <button class="page-button" onClick={() => decreaseAmountCB()} disabled={props.page === 1}>
            prev
          </button>
          <span class="page-number">{props.page}</span>
          <button class="page-button" onClick={() => increaseAmountCB()} disabled={props.page === 5}>
            next
          </button>
        </div>
      </div>
    );
}

export default Top100View;