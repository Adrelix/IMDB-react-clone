// Add relevant imports here
// TODO

// Initialise firebase
// TODO

// this is needed so that unit tests can inject a mock firebase
import firebaseConfig from "../Utilities/firebaseConfig";
import MovieModel from "./MovieModel";
firebase.initializeApp(firebaseConfig);
//  REF is the “root” Firebase path. NN is your TW2_TW3 group number
const REF = "MovieModel37";
firebase.database().ref(REF+"/test").set("dummy");


function observerRecap(model) {
    //TODO
    function observerACB(payload){
      console.log(payload)
    }
    model.addObserver(observerACB)

}

/*function makeBigPromiseACB(firebaseData) {
  function createModelACB(dishArray){
    const pageNumber = firebaseData.val().pageNumber;
    return new DinnerModel(pageNumber);
  }
  function makeDishPromiseCB(dishId) {
    return getDishDetails(dishId);
  }
  if(firebaseData.val()){
    if(firebaseData.val().yourDishesPath){
      const dishPromiseArray= Object.keys(firebaseData.val().yourDishesPath).map(makeDishPromiseCB);
      return Promise.all(dishPromiseArray).then(createModelACB);
    }else{
      return Promise.all([]).then(createModelACB);
    }
  }else {
    return new DinnerModel(2, []);
  }
}*/

function firebaseModelPromise() {
  return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);}


function updateFirebaseFromModel(model) {
    //TODO


    function observerACB(payload) { // Seters
      if(payload.pageNumber) {
        firebase.database().ref(REF+"/numberOfGuests").set(model.pagenumber);
      }
    }
    model.addObserver(observerACB)
    return;
}

function updateModelFromFirebase(model) {
    //TODO

    firebase.database().ref(REF+"/pageNumber").on("value",     // Set listener to numberOfGuests path
    function pageChangedInFirebaseACB(firebaseData){model.changePageNumber(firebaseData.val());}
    );

    return;
}

// Remember to uncomment the following line:
 export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase};
