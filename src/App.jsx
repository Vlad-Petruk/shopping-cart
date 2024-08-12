import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading]= useState(true)
  function useFetch(parameters) {
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products${parameters}`,{ mode: 'cors' })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data=>{
          const dataToArray = Object.values(data);
          setData(dataToArray)
          setLoading(false)
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [parameters])
  }

  // useFetch('')

  return (
    <>
      <NavBar />
      <div className='main-content'>
        <Outlet context={{ data, error, loading, useFetch }}/>
      </div>
      <Footer />
    </>
);
}

export default App;
