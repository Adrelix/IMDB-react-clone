import { getMovieDetails, getMovieByGenre } from "../Utilities/dataSource";
import resolvePromise from "../Utilities/resolvePromise";
class MovieModel{
    constructor(movieArray =[], currentMovie, currentGenre, currentMediaType, pageNumber){
        this.observers = [];
        this.movies = movieArray;
        this.currentGenre = currentGenre;
        this.currentMediaType = currentMediaType;
        this.pageNumber = 1;
        this.currentMoviePromiseState = {};
        this.searchResultsPromiseState = {};
        this.currentGenrePromiseState = {};
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
    setCurrentGenre(genreID, type){
        console.log(genreID, type);
        if(genreID !== this.currentGenre || type !== this.currentMediaType){
            this.pageNumber = 1;
        }
        if(this.currentGenre !== genreID || (this.currentGenre === genreID && type !== this.currentMediaType)){
            this.currentGenre = genreID;
            this.currentMediaType = type;  
            this.notifyObservers({currentGenre: genreID, currentMedia: type});
        }
    }
    setCurrentType(type){
        if(this.currentMediaType !== type){
            this.pageNumber = 1;
            this.currentMediaType = type;
            this.notifyObservers({currentMedia: type});
        }
    }
    changePageNumber(page){
        console.log(page);
        if(this.pageNumber!==this.pageNumber + 1){
            this.pageNumber = page;
            this.notifyObservers({pageNumber: page});
        }else{
            this.pageNumber = page;
        }
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