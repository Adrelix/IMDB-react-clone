import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
function App(props) {
  return (
    <div class="App">
      <div><Sidebar/></div>
      <div class="searchResult">
        <Show hash="Top100"></Show>
        <div><SearchbarPresenter/></div>
        <div><MainPagePresenter/></div>
      </div>
    </div>
  );
}

export default App;
