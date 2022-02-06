import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import './Header.css'
import Cards from './components/Cards'
import punks from './Punks'
import Main from "./components/Main"
import PunkCollection from './components/PunkCollection';
import { useState } from 'react';
import "./Main.css"
import Punks from './Punks'
function App() {
  const[selectedPunk,setSelectedPunk]=useState(Punks[0]);
  function clickedPunk(punk)
  {
    setSelectedPunk(punk);

  }
  return (
    <div>
      <Header/>
      <Main 
      img={selectedPunk.img}
      name={selectedPunk.name}
      id={selectedPunk.id}
      index={selectedPunk.index}
      icon={selectedPunk.icon}
      price={selectedPunk.price}/>

      <PunkCollection clickedPunk={clickedPunk}/>

    </div>



  );
}

export default App;
