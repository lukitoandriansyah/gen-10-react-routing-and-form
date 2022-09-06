import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppTask(){
  return(
      <div>
        <h1>Music Story Ito</h1>
        <hr/>
        <Outlet/>
      </div>
  )
}

export default AppTask;
