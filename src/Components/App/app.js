import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
<<<<<<< HEAD
import TopMovies from '../SideBar/topp100MoviesPresenter';



function App() {
=======
function App(props) {
>>>>>>> 3249ffce50275ae55bf0bf76b7d8bd632f690d74
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
