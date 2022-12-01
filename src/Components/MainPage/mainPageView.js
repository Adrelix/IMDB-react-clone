function MainPageView(props){

    return(<div>
                <div class="mainPageResultWrapper">
                <h1>Cool new movies</h1>
                {props.newMovieResult}
                </div>
                <div class="mainPageResultWrapper">
                <h1>Top rental movies</h1>
                {props.topMovieResult}
                </div>
            </div>);
}
export default MainPageView;