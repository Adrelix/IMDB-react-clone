import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
import TopMovies from '../SideBar/topp100MoviesPresenter';
import Genre from '../SideBar/genrePresenter';
function App(props) {
  console.log(props.model.currentGenre);
  return (
    <div className="App">
      <Sidebar model = {props.model} />
      <Show hash="#top100"><TopMovies/></Show>
      <SearchbarPresenter model = {props.model}></SearchbarPresenter>
      <div className='mainContainer'>
        <Show hash="#mainContent"><MainPagePresenter model = {props.model}/></Show>
        <Show hash={"#genre"}><Genre model = {props.model}/></Show>
      </div>
      </div>
  );
}

export default App;