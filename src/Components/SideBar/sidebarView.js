import React from 'react';

function SidebarView(props){
    function goToTop100(mediaType){
        if(mediaType === "movie"){
            props.onSettingType(mediaType);
        }else if(mediaType === "tv"){
            props.onSettingType(mediaType);
        }
        window.location.hash="#top100";
    }
    function goToGenre(genre, mediaType){
        function findMovieId(item){
            return item.name === genre.name;
        }
        if(mediaType === "movie"){
            props.onSettingGenre(props.movieGenres.find(findMovieId).id, mediaType);
        }else if(mediaType === "tv"){
            props.onSettingGenre(props.tvGenres.find(findMovieId).id, mediaType);
        }
        window.location.hash="#genre"; //not working properly yet. Should be like #genre=action
    }
    function renderGenres(nextGenre, type){
        return <div class={"genre-option"} value={nextGenre + type} onClick={() => goToGenre(nextGenre, type)}>{nextGenre.name}</div>
    }
    function changeClass(type){
        const currentClassName = document.getElementById("select" + type).className;
        if(currentClassName === "is-expanded"){
            document.getElementById("select" + type).className = "is-closed";
        }else{
            document.getElementById("select" + type).className = "is-expanded";
        }
    }
    return (
      <div class="sidebar">
        <div class="sidebar-content">
          <h2 class="title">Movies</h2>
          <ul>
            <li onClick={() => goToTop100("movie")}>Top 100 Movies</li>
            <li>Most Popular Movies</li>
            <li onClick={() => changeClass("MOVIE")} key={"MovieGenres"}>
              Browse by Genre
            </li>
            <div id="selectMOVIE" class="is-closed" value="movieGenres">
              {props.movieGenres.map((genre) => renderGenres(genre, "movie"))}
            </div>
          </ul>
          <h2 class="title">TV Shows</h2>
          <ul>
            <li onClick={() => goToTop100("tv")}>Top 100 TV Shows</li>
            <li>Most Popular TV Shows</li>
            <li onClick={() => changeClass("TV")} key={"TVGenres"}>
              Browse by Genre
            </li>
            <div id="selectTV" class="is-closed" value="TVGenres">
              {props.tvGenres.map((genre) => renderGenres(genre, "tv"))}
            </div>
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