function MainPageView(props){

    return(<div>
                <div class="mainPageResultWrapper">
                <h1>Popular movies right now</h1>
                {props.popularMovieResult}
                </div>
                <div class="mainPageResultWrapper">
                <h1>Top rated movies</h1>
                {props.topMovieResult}
                </div>
            </div>);
}
export default MainPageView;