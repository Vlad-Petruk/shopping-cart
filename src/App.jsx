import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [cartAmount, setCartAmount] = useState(0);
  const [cart, setCart] = useState([])

  return (
    <>
      <NavBar cartAmount={cartAmount}/>
      <div className='main-content'>
        <Outlet context={[cart, setCart, cartAmount, setCartAmount]}/>
      </div>
      <Footer />
    </>
);
}

export default App;
