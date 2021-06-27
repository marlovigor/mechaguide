import React, { useState } from "react";
import Header from '../Components/header/header'
import Nav from '../Components/Nav/Nav'
import LatestContent from '../Components/lastestContent/LatestContent'
import { Router, Route, Switch } from "react-router";
import "./Homepage.css";
import BannerRender from "../Components/banner/BannderRender"



function HomePage() {
  return (
    <div className="App">
      <Nav />   
      <BannerRender />
      <Header />
      <LatestContent />
    </div>
  );
}

export default HomePage;