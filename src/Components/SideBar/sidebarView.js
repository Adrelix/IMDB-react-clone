function SidebarView(props){
    function goToTopMovies(){
        window.location.hash="#Top100";
    }
    function goToMoviesByGenre(prop){
        console.log(prop);
        function findMovieId(item){
            return item.name === prop.target.innerText;
        }
        props.onSettingGenre(props.genres.find(findMovieId).id);
        console.log(props.genres.find(findMovieId).id);
        window.location.hash="#Genre";
    }
    function renderGenres(nextGenre){
        return <div class="genre-option" value={nextGenre} onClick={goToMoviesByGenre}>{nextGenre.name}</div>
    }
    function changeClass(){
        console.log(document.getElementById('select').className);
        const currentClassName = document.getElementById('select').className;
        if(currentClassName === "is-expanded"){
            document.getElementById('select').className = "is-closed";
        }else{
            document.getElementById('select').className = "is-expanded";
        }
    }
    return (
      <div class="sidebar">
        <div class="sidebarText">
        <h2 class="title">Movies</h2>
            <ul>
                <li onClick={goToTopMovies}>Top 100 Movies</li>
                <li>Most Popular Movies</li>
                <li onClick={changeClass}>Browse by Genre</li>
                <div id="select" class="is-closed">{props.genres.map(renderGenres)}</div>
            </ul>
            <h2 class="title">TV Shows</h2>
            <ul>
                <li>Top 100 TV Shows</li>
                <li>Most Popular TV Shows</li>
                <li>Browse by Genre</li>
            </ul>
            <h2 class="title">Profile</h2>
            <ul>
                <li>My Watchlist</li>
                <li>My Ratings</li>
                <li>My Lists</li>
            </ul>
        </div>
      </div>
    );
}
export default SidebarView;
//<select class="dropdown"><option value="choose">Browse by Genre</option></select>