import logo from "./logo.svg";
import "./App.css";
import {Router} from '@reach/router';
import SearchBar from "./components/SearchBar";
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import WrongPath from './components/WrongPath';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchBar path='/'/>
      <Router>        
        <People path='/people/:id'/>
        <Planets path='/planets/:id'/>
        <Starships path='/starships/:id'/>
        <WrongPath path='/error404'/>
      </Router>
    </div>
  );
}

export default App;
