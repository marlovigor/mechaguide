import logo from "./logo.svg";
import "./App.css";
import Homepage from "./screens/Homepage";

import { Router, Route, Switch } from "react-router";
import HomePage from "././screens/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <h2>about news</h2>
        </Route>
        <Route exact path="/latest">
          <h2>latest news</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
