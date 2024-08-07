import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className='main-content'>
        <Outlet />
      </div>
      <Footer />
    </>
);
}

export default App;
