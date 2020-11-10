import React, { useState } from 'react'
import axios from "axios";
import Website from "./Components/Website"

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
      <Website/>
    </div>
  )
}
