function SidebarView(props){
    function temp(){
        console.log("option pressed");
    }
    function goToTopMovies(){
        window.location.hash="#Top100";
    }
    return (
      <div class="sidebar">
        <div class="sidebarText">
        <h2 class="title">Movies</h2>
            <ul>
                <li onClick={goToTopMovies}>Top 100 Movies</li>
                <li>Most Popular Movies</li>
                <li>Browse by Genre</li>
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
