import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';

export const ShopContext = createContext({
  cartItems: []
})

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <ShopContext.Provider value={{cartItems, setCartItems}}>
      <NavBar/>
      <div className='main-content'>
        <Outlet />
      </div>
      <Footer />
    </ShopContext.Provider>
);
}

export default App;
