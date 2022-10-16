import React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./components/context/auth.context";
import { UserContext } from "./components/context/user.context";


function App() {

  const { isAuth, setAuth } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  useEffect(()=>{
    fetch(`http://localhost:5000/profile`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      setUser(data);
      isAuth(true);
    })
  },[setUser]);

  // useEffect(() => {
  //   let token = localStorage.getItem("jwt");
  //   if (token && !user.name) {
  //     fetch("http://localhost:5000/profile", {
  //       headers: {
  //         token: token,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser({
  //           name: data.email,
  //         });
  //       });
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>

  );
}

export default App;
