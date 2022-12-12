import MovieModel from "../../Models/MovieModel";
import PageModel from "../../Models/PageModel";
import App from "../App/app";
import React from "react";
//import { firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase } from "../../Models/firebaseModel";
import resolvePromise from "../../Utilities/resolvePromise";
import promiseNoData from "../../Utilities/promiseNoData";

export default function ReactRoot(){
    //borde se ut något så här
    
    /*const [promiseState]= React.useState({});
    const [, reRender]= React.useState(); 
    if(!promiseState.promise)
    resolvePromise(firebaseModelPromise(), promiseState, notifyACB)
    
    function notifyACB(){
        reRender(new Object()); 
    }
    
  if(promiseState.data){
    updateFirebaseFromModel(promiseState.data)
    updateModelFromFirebase(promiseState.data)
  }

    return promiseNoData(promiseState) || <App model = {promiseState.data} />;*/
    return <App model ={new MovieModel()} pageModel = {new PageModel()}/>
}