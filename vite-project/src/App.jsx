import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import apiKey from "./config";
import "./App.css";
// Components
import Nav from "./components/Nav";
import Search from "./components/Search";


function App() {
  const [count, setCount] = useState(0);

  return (
  <>
   <Nav />
   <Search />
   <Routes>
   


   </Routes>
  
  </>
  );
}

export default App;
