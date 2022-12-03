import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
import TopMovies from '../SideBar/topp100MoviesPresenter';
function App(props) {
  return (
    <div className="App">
      <div><Sidebar model = {props.model}/></div>
      <Show hash="#Top100"><TopMovies/></Show>
      <div className="searchResult">
      <div><SearchbarPresenter model = {props.model}></SearchbarPresenter></div>
      <Show hash="#mainContent"><MainPagePresenter model = {props.model}/></Show>
      </div>
    </div>
  );
}

export default App;
