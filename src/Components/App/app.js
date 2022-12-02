import './app.css';
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
function App() {
  /*<header className="App-header">
        <img src='https://raisingchildren.net.au/__data/assets/image/0035/49895/bee-movie.jpg' className="App-logo" alt="logo" />
        <p>
         I am dee bee
        </p>
      </header>*/
  return (
    <div className="App">
      <div><SearchbarPresenter/></div>
      <div><Sidebar/></div>

    </div>
  );
}

export default App;
