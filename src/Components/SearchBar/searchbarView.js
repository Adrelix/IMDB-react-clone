
function SearchbarView(props){
    function searchOnClickACB(){
      props.onClickSearch(); 
      window.location.hash ="search"
      }
      function textACB(text){
        props.onTextSetQuery(text.target.value);
      }
      function homeOnClickACB(){
        window.location.hash="mainContent"
        }
    return(<div class="searchbar">
        <img src={require("./logo.JPG")} onClick={homeOnClickACB} alt="logo" class="image" />
        <input type="text" placeholder= "Search here" onInput={textACB}></input>
        <button onClick={searchOnClickACB}>Search!</button>
        </div>);
}
export default SearchbarView;