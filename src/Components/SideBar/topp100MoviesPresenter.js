/*import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";
import {getTopRated} from "../../Utilities/dataSource";
import TopMoviesView from "./top100MoviesView";

export default
function TopMovies(){
    const [promiseState]=  React.useState(function initialSearchACB(){return getTopRated()})
    const [, reRender]= React.useState(); 
    React.useEffect( componentWasCreatedACB, [] ); 
    
    function componentWasCreatedACB(){  
        resolvePromise(getTopRated(), promiseState, notifyACB)
        function isTakenDownACB(){           
            
        }
       return isTakenDownACB;    
    }
    function notifyACB(){ reRender(new Object()); }

    if(!promiseState.promise){
        (resolvePromise(getTopRated(), promiseState, notifyACB))
    }
    return (<div>{promiseNoData(promiseState) || <TopMoviesView topResults={promiseState.data}/>}
    </div>);
}*/