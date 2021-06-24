import React, { useState } from "react";
import "./header.css";
import Carousel from "react-material-ui-carousel";


function items(props){
  <div>
    <img src="/my_logo.png"/>
    <h3></h3>
    <p></p>
    </div>
}



function Header() {
  const [arr, changarr] = useState([
    {
      name: "learn of the world of gundam",
      img: "/imageAssets/Gundam-Feature.jpg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "chars counter attack",
      description: "Hello World!",
      img: "/imageAssets/Mobile.jpg",
    },
    {
      name: "learn of the world of gundam",
      img: "/imageAssets/Gundam-Feature.jpg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "chars counter attack",
      description: "Hello World!",
      img: "/imageAssets/Mobile.jpg",
    },
    
  ]);

  return (
    <div>
      <img
        className="main-image"
        src="/my_logo.png"
        width="100%"
        height="20%"
      />
      <Carousel>
        {arr.map((item) => {
          return (
            <div> 
              <img src={item.img}  width="400px" height="250px"/>
              <h1 className="Img-title">{item.name}</h1>
            </div>
          );
        })}
      </Carousel>
      {/* <img className="main-image" src="/my_logo.png" width="100%" height="20%"/> */}
    </div>
  );
}

export default Header;
