import DetailsView from "../views/detailsView.js";
import promiseNoData from "../views/promiseNoData.js"
import React from "react";
import getMovieDetails from "/Utilities/dataSource.js"
import treatHTTPResponseACB from "/Utilities/dataSource.js"
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";


export default
function Details(props){

  const [movieDetailsState]= React.useState(function getMovieDetailsACB(){return getMovieDetails(props.model.currentMovie)});

  function componentWasCreatedACB(){
    resolvePromise(getMovieDetails(props.model.currentMovie), movieDetailsState,notifyACB)
  }

  if(!movieDetailsState.promise) {
    resolvePromise(props.model.currentMovie, movieDetailsState,notifyACB)
  }
    function notifyACB(){ reRender(new Object()); }

/*
  function observerACB(){
    copyData(props.model.currentDishPromiseState.data);
    copyDishes(props.model.dishes);
    copyNumber(props.model.numberOfGuests);
    copyPromise(props.model.currentDishPromiseState.promise);
  }
  const test = getMovieDetails(props.model.currentMovie)

  */

  React.useEffect(wasCreatedACB, []);
    return (promiseNoData(movieDetailsState) || <DetailsView movieDetails={movieDetailsState.data} />);
}
