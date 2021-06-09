import Header from '../Components/header/header'
import Nav from '../Components/Nav/Nav'
import { Router, Route, Switch } from "react-router";

function HomePage() {
  return (
    <div className="App">
      <Nav />
      <Header />
    </div>
  );
}

export default HomePage;