function SidebarView(props){
    console.log("props.genres");
    console.log(props.genres.genres);
    function temp(){
        console.log("option pressed");
    }
    function goToTopMovies(){
        window.location.hash="#Top100";
    }
    function goToMoviesByGenre(prop){
        console.log(prop);
        window.location.hash="#Genre";
    }
    function renderGenres(nextGenre){
        return <option value={nextGenre} onClick={goToMoviesByGenre}>{nextGenre.name}</option>
    }
    return (
      <div class="sidebar">
        <div class="sidebarText">
        <h2 class="title">Movies</h2>
            <ul>
                <li onClick={goToTopMovies}>Top 100 Movies</li>
                <li>Most Popular Movies</li>
                <li><select class="dropdown"><option value="choose">Browse by Genre</option>{props.genres.genres.map(renderGenres)}</select></li>
            </ul>
            <h2 class="title">TV Shows</h2>
            <ul>
                <li>Top 100 TV Shows</li>
                <li>Most Popular TV Shows</li>
                <li>Browse by Genre</li>
            </ul>
            <h2 class="title">Profile</h2>
            <ul>
                <li onClick={temp}>My Watchlist</li>
                <li>My Ratings</li>
                <li>My Lists</li>
            </ul>
        </div>
      </div>
    );
}

export default SidebarView;
