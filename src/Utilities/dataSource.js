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
    const endpoint = "search/movie?api_key=" + API_KEY + "&language=en-US&" + searchParams + "&page=1&include_adult=false";
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}
async function searchMulti(paramsObj){
    const searchParams = new URLSearchParams(paramsObj);
    const endpoint = "search/multi?api_key=" + API_KEY + "&language=en-US&" + searchParams + "&page=1&include_adult=false";
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}
async function getTopRated(page, type){
    let endpoint = "movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1&region=SE&page=" + page;
    if(type === "tv"){
        endpoint = "tv/top_rated?api_key=" + API_KEY + "&language=en-US&page=1&page=" + page;
    }
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}
async function getPopular(){
    const endpoint = "movie/popular?api_key=" + API_KEY + "&language=en-US&page=1&region=GB";
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getTrending(){
    const endpoint = "trending/all/week?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getMovieByGenre(genreID, mediaType, page){    
    let endpoint = "discover/" + mediaType + "?api_key=" + API_KEY + "&page=" + page + "&with_genres=" + genreID;
    if (mediaType === "movie") {
      endpoint =
        "discover/" +
        mediaType +
        "?api_key=" +
        API_KEY +
        "&language=en-US&sort_by=vote_average.desc&certification_country=US&certification.lte=R&include_adult=false&include_video=false&page=" +
        page +
        "&vote_count.gte=200&with_genres=" +
        genreID;
    }
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

export {searchMovies, getMovieDetails, searchMulti, getTopRated, getPopular, getTrending, getMovieByGenre};