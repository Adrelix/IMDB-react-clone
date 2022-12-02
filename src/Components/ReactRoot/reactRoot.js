import MovieModel from "../../Models/MovieModel";
import App from "../App/app";

export default function ReactRoot(){
      
    return <App model ={new MovieModel()}/>
}