import {API_KEY} from "./apiConfig"
function treatHTTPResponseACB(response){
    if(response.status != 200) throw new Error("API problem "+response.status);
    return response.json();
  }
  function transformSearchResultACB(param){
    return param.results;
  }
