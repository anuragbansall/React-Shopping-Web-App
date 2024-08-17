import React from "react";
import NavBar from "./Common/NavBar";
import ProductsContainer from "./Components/ProductsContainer";
import Routing from "./utils/Routing";
import Home from "./Components/Home";

function App(){
  return(
    <div className="h-screen w-full">
      <Routing />
    </div>
  )
}

export default App;