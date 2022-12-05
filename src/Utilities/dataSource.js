import {BASE_URL, API_KEY} from "./apiConfig.js";
function treatHTTPResponseACB(response){
    if(response.status !== 200){
        throw "not found";
    }
    return response.json();
 }
 function transformResultCB(response){
    return response.results;
 }
const options = {
    method: 'GET'
};

async function getMovieDetails(movieID){
    const endpoint = "movie/" + movieID.toString() + "?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB);
}
async function searchMovies(paramsObj){
    const searchParams = new URLSearchParams(paramsObj);
    const endpoint = "search/movie?api_key=" + API_KEY + "&" + searchParams;
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function searchPerson(paramsObj){
    const searchParams = new URLSearchParams(paramsObj);
    const endpoint = "search/person?api_key=" + API_KEY + "&" + searchParams;
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getTopRated(){
    const endpoint = "movie/top_rated?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getPopular(){
    const endpoint = "movie/popular?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getTrending(){
    const endpoint = "trending/all/week?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getMovieByGenre(genreID, mediaType){
    let endpoint = "discover/" + mediaType + "?api_key=" + API_KEY + "&language=en-US&with_genres=" + genreID;
    if(mediaType === "movie"){
        endpoint =
          "discover/" +
          mediaType +
          "?api_key=" +
          API_KEY +
          "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_genres=" +
          genreID +
          "&without_keywords=softcore"; 
    }
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

export {searchMovies, getMovieDetails, searchPerson, getTopRated, getPopular, getTrending, getMovieByGenre};