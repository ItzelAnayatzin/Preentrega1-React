import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
   <div>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;