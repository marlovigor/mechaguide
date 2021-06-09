import logo from './logo.svg';
import './App.css';
import Homepage from './screens/Homepage'

import { Router, Route, Switch } from "react-router";
import HomePage from '././screens/Homepage'

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
    <Homepage /> 

      {/* </Switch> */}
    </div>
  );
}

export default App;
