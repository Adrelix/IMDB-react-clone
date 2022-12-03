import { getMovieDetails } from "../Utilities/dataSource";
import resolvePromise from "../Utilities/resolvePromise";
class MovieModel{
    constructor(movieArray =[], currentMovie, currentGenre){
        this.observers = [];
        this.movies = movieArray;
        this.currentMoviePromiseState = {};
        this.searchResultsPromiseState = {};
    }

    addObserver(obs){
        this.observers = [...this.observers, obs];
    }

    removeObserver(obsToRemove){
   
        function sameObsCB(obs){
            if(obs.name !== obsToRemove.name){
                return true;
            }
        }
    this.observers = this.observers.filter(sameObsCB)
    }
    setCurrentGenre(genreID){
        this.currentGenre = genreID;
    }
    notifyObservers(payload){
        function invokeObserverACB(obs){ obs(payload); }    
        try{this.observers.forEach(invokeObserverACB)}catch(err){console.log(err)}
    }
    setCurrentMovie(id){
        function notifyACB(){ 
            this.notifyObservers();  // no payload 
        }
        //this.currentDish=TODO
        if(id === undefined){
          //  throw new Error("there was an error");
          //throw "error"
          return
        }else if(id === this.currentDish)return;
        
          
        this.currentMovie= id;
        this.notifyObservers({currentMovie: id})
        resolvePromise(getMovieDetails(id),this.currentMoviePromiseState, notifyACB.bind(this))
    }
}
export default MovieModel;