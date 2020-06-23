import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Routeri from './router';
import Axios from 'axios';



function App() {

  //Check if we have a previsly saved token in localstorage
  const checkIsAuth = () => {
    const userData = localStorage.getItem("userData")
    if (userData) {
      const parsedUserData = JSON.parse(userData)
      return parsedUserData.jwt
    }
  }

  const Token = checkIsAuth()

  //If token exists we set to default header for future requests
  if (Token){
    Axios.defaults.headers.common['Authorization'] = "Bearer " + Token;
  }

  const [isAuthenticated, setIsAuthenticated] = useState(!!Token)

  function login(data) {
    localStorage.setItem("userData", JSON.stringify(data))
    Axios.defaults.headers.common['Authorization'] = "Bearer " + data.jwt;
    setIsAuthenticated(true)
  }

  return (
    <Routeri isAuthenticated={isAuthenticated} login={login} />
  );
}

export default App;
