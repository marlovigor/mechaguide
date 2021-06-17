import React, { useState }  from "react";
import './header.css'
import Carousel from 'react-material-ui-carousel'
function Header() {

  const [ arr, changarr] = useState([

    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
  },
  {
      name: "Random Name #2",
      description: "Hello World!"
  }
  ])


  return (
    
    <div>
      <img className="main-image" src="/my_logo.png" width="100%" height="20%"/>
       <Carousel>
            {arr.map( (item)=>{return <h1>{item.name}</h1>})}
        </Carousel>
      {/* <img className="main-image" src="/my_logo.png" width="100%" height="20%"/> */}
    </div>
  );
}

export default Header;
