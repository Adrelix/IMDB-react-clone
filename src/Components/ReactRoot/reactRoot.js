import MovieModel from "../../Models/MovieModel";
import PageModel from "../../Models/PageModel";
import App from "../App/app";

export default function ReactRoot(){
      
    return <App model ={new MovieModel()} pageModel = {new PageModel()}/>
}