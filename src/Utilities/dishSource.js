import {API_KEY} from "../apiConfig"
function treatHTTPResponseACB(response){
    if(response.status != 200) throw new Error("API problem "+response.status);
    return response.json();
  }
  function transformSearchResultACB(param){

    return param.results;
  }

  function getMovieDetails(param){
    const query = param.query;
    const base_url = "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query="+query;
    return fetch(base_url).then(treatHTTPResponseACB)
  }
  export {getMovieDetails}