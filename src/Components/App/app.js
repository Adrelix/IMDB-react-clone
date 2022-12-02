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
      <div><TopMovies/></div>
      <div className="searchResult">

        <div><SearchbarPresenter/></div>
        <div><MainPagePresenter/></div>
      </div>
    </div>
  );
}

export default App;
