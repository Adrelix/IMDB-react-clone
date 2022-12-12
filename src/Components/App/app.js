import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
import Sidebar from "../SideBar/sidebarPresenter";
import DetailsPresenter from "../Details/detailsPresenter";
import Top100 from '../SideBar/top100Presenter';
import Genre from '../SideBar/genrePresenter';
function App(props) {
  return (
    <div className="App">
      <Sidebar model={props.model} />
      <SearchbarPresenter model={props.model}></SearchbarPresenter>
      <div className="mainContainer">
        <Show hash="#mainContent">
          <MainPagePresenter model={props.model} />
        </Show>
        <Show hash ="#details">
          <DetailsPresenter model ={props.model}></DetailsPresenter>
        </Show>
        <Show hash="#top100">
          <Top100 model={props.model} />
        </Show>
        <Show hash="#genre">
          <Genre model={props.model} />
        </Show>
      </div>
    </div>
  );
}
export default App;
