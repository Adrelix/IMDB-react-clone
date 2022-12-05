import {searchDishes} from "../dishSource"

function DetailsView(props) {

  function addToMenuClickedACB(){
    console.log("user wants to add dish")
  }
  function CancelClickedACB(){
    window.location.hash ="#search"
    console.log("user wants to cancel dish")
  }
  function buttonClickACB() {
    window.location.hash ="#search"
    props.menuButtonCustomEvent()
  }

  return( renderDishData(props.movieDetails))

}
function renderDishData(movieData){
return <div class="horizontalFlexParent">
        <div class="leftSidePart"> {movieData.title}
         <div>{movieData.moviePoster}</div>
          </div>
        <div class="middlePart">
          <div>{movieData.score}</div>
          <div>{movieData.actors}</div>
          <div>{movieData.genre}</div>
          <div>{movieData.writers}</div>
         </div>
        </div>
}
export default DetailsView





/*
HTML för själva view:en

<html>
<body>
  <div class="horizontalFlexParent">
          <div class="leftSidePart"> Movie title
           <div>Movie poster</div>
    </div>
          <div class="middlePart">
          this is the middle column

            <div>Score</div>
            <div>Actors</div>
            <div>Director</div>
            <div>Writers</div>
                     </div>
  </div>
</body>
</html>


CSS för HTML:en ovan

html{height:100%}
body{height:100%;   margin:0;}
div{border:1px solid;  text-align:center;}

.horizontalFlexParent{
  display:flex;
  flex-direction:row;
  height:100%
}

.leftSidePart{
  flex:0.30;
}
.rightSidePart{
  flex:0.1
}
.middlePart{
  flex:0.8;
  margin: 2px;
  background-color:green;
}




*/
