import { Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <div className='main-content'>
        <Outlet/>
      </div>
      <Footer />
    </>
);
}

export default App;
