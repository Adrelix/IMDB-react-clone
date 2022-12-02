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
    return(<div>
        <input placeholder= "Search here" onInput={textACB}></input>
        <button onClick={searchOnClickACB}>Search!</button>
        <button onClick={homeOnClickACB}>Back to home</button>
        </div>);
}
export default SearchbarView;