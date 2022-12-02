import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
import TopMovies from '../SideBar/topp100MoviesPresenter';
function App(props) {
  return (
    <div className="App">
      <div><Sidebar/></div>
      <Show hash="#Top100"><TopMovies/></Show>
      <div className="searchResult">
      <div><SearchbarPresenter></SearchbarPresenter></div>
      <Show hash="#mainContent"><MainPagePresenter/></Show>
      </div>
    </div>
  );
}

export default App;
