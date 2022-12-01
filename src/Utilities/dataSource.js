import {BASE_URL, API_KEY} from "./apiConfig.js";

async function getMovieDetails(movieID){
    function treatHTTPResponseACB(response){
        if(response.status !== 200){
            throw "not found";
        }
        return response.json();
     }
     const options = {
        method: 'GET'
    };
    const endpoint = "movie/" + movieID.toString() + "?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB);
}
async function searchMovies(paramsObj){
    console.log(paramsObj);
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
    const searchParams = new URLSearchParams(paramsObj);
    const endpoint = "search/movie?api_key=" + API_KEY + "&" + searchParams;
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function searchPerson(paramsObj){
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
    const searchParams = new URLSearchParams(paramsObj);
    const endpoint = "search/person?api_key=" + API_KEY + "&" + searchParams;
    console.log(BASE_URL+endpoint);
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getTopRated(){
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
    const endpoint = "movie/top_rated?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

async function getPopular(){
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
    const endpoint = "movie/popular?api_key=" + API_KEY;
    return fetch(BASE_URL+endpoint, options).then(treatHTTPResponseACB).then(transformResultCB);
}

export {searchMovies, getMovieDetails, searchPerson, getTopRated, getPopular};