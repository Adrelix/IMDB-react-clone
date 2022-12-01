import './app.css';
import Show from '../../Utilities/show';
import MainPagePresenter from '../MainPage/mainPagePresenter'
import SearchbarPresenter from "../SearchBar/searchbarPresenter";
function App() {
  return (
    <div className="App">
      <div><SearchbarPresenter/></div>
      <div><MainPagePresenter/></div>
    </div>
  );
}

export default App;
