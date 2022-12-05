import React from 'react';

function SidebarView(props){
    function goToTopMovies(){
        //window.location.hash="#top100";
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
        return <div class="genre-option" value={nextGenre + type} onClick={() => goToGenre(nextGenre, type)}>{nextGenre.name}</div>
    }
    function changeMovieClass(){
        const currentClassName = document.getElementById('select').className;
        if(currentClassName === "is-expanded"){
            document.getElementById('select').className = "is-closed";
        }else{
            document.getElementById('select').className = "is-expanded";
        }
    }
    function changeTVClass(){
        const currentClassName = document.getElementById('selectTV').className;
        if(currentClassName === "is-expanded"){
            document.getElementById('selectTV').className = "is-closed";
        }else{
            document.getElementById('selectTV').className = "is-expanded";
        }
    }
    return (
      <div class="sidebar">
        <div class="sidebar-content">
        <h2 class="title">Movies</h2>
            <ul>
                <li onClick={goToTopMovies}>Top 100 Movies</li>
                <li>Most Popular Movies</li>
                <li onClick={changeMovieClass} value="browseMovie">Browse by Genre</li>
                <div id="select" class="is-closed" value="movieGenres">{props.movieGenres.map((genre) => renderGenres(genre, "movie"))}</div>
            </ul>
            <h2 class="title">TV Shows</h2>
            <ul>
                <li>Top 100 TV Shows</li>
                <li>Most Popular TV Shows</li>
                <li onClick={changeTVClass} value="browseTv">Browse by Genre</li>
                <div id="selectTV" class="is-closed" value="TVGenres">{props.tvGenres.map((genre) => renderGenres(genre, "tv"))}</div>
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