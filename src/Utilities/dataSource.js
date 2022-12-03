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

async function getMovieByGenre(genreID){
    const endpoint = "discover/movie?api_key=" + API_KEY + "&with_genres=" + genreID;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

export {searchMovies, getMovieDetails, searchPerson, getTopRated, getPopular, getTrending, getMovieByGenre};