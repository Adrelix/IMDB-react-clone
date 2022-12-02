import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
function App() {
  return (
    <div className="App">
      <div><SearchbarPresenter/></div>
      <div><MainPagePresenter/></div>
      <div><Sidebar/></div>

    </div>
  );
}

export default App;
