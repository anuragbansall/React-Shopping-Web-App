import React, { useEffect } from "react";
import NavBar from "./Common/NavBar";
import ProductsContainer from "./Components/ProductsContainer";
import Routing from "./utils/Routing";
import Home from "./Components/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="h-screen w-full">
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
