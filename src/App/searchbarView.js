function SearchbarView(props){
    function onClickACB(){
        props.onClickSearch();
      }
      function textACB(text){
        props.onTextSetQuery(text.target.value);
      }
    return(<div>
        <input placeholder= "Search here" onInput={textACB}></input>
        <button onClick={onClickACB}>Search!</button>
        </div>);
}
export default SearchbarView;