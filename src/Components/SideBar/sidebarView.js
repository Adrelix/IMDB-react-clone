function SidebarView(props){
    function temp(){
        console.log("option pressed");
    }
    return (
      <div class="sidebar">
        <div class="sidebarText">
        <h2 class="title">Movies</h2>
            <ul>
                <li>Top 100 Movies</li>
                <li>Most Popular TV Shows</li>
                <li>Latest Trailers</li>
            </ul>
            <h2 class="title">TV Shows</h2>
            <ul>
                <li>Top 100 TV Shows</li>
                <li>Most Popular TV Shows</li>
                <li>Latest Trailers</li>
            </ul>
            <h2 class="title">My Profile</h2>
            <ul>
                <li onClick={temp}>Watchlist</li>
                <li>Ratings</li>
                <li>My Lists</li>
            </ul>
        </div>
      </div>
    );
}

export default SidebarView;
