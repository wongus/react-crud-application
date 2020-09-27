import React, { useState } from 'react'
import Herobanner from './Components/Herobanner'
import CreateUserForm from './Components/CreateUserForm'
// import Projectcard from './Components/Projectcard';
import Modal from './Components/Modal';
import axios from "axios";
import Projectcard from './Components/Projectcard';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [initilized, setInitialized] = useState(false)

  
  if(!initilized){
    if (localStorage.getItem('token') !== null) {
      axios.defaults.headers.common['Auth-Token'] = localStorage.getItem('token');
      setLoggedIn(true)
    } else{
      setLoggedIn(false)
    }
    setInitialized(true)
  }


  console.log(loggedIn)
  return (
    <div>
      <Herobanner loggedIn={loggedIn} setLoggedIn={setLoggedIn} />    
      <Modal  />
      <Projectcard/>
      <CreateUserForm/>
    </div>
  )
}
