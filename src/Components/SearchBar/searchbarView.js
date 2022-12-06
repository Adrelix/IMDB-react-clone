
function SearchbarView(props){
    function searchOnClickACB(param){
      props.onClickSearch(); 
      window.location.hash ="search"
      }
    function inputOnClickACB(param){
      if(param.code === "Enter"){
        props.onClickSearch(); 
        window.location.hash ="search"
      }
    }
      function textACB(text){
        props.onTextSetQuery(text.target.value);
      }
      function homeOnClickACB(){
        window.location.reload();
        }
     
    return(<div class="searchbar">
        <img src={require("./logo.JPG")} onClick={homeOnClickACB} alt="logo" class="image" />
        <input type="search" placeholder="Search here" onInput={textACB} onKeyUp={inputOnClickACB}></input>
        <button onClick={searchOnClickACB}>Search!</button>
        </div>);
}
export default SearchbarView;