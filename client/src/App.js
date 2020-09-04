import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './Components/Users'

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(
        'http://localhost:5000/users',
      );
      setUsers(result.data);
      console.log(result.data)
    };
    fetchUsers();
  }, []);

  return (
    <div className ="container">
    {users.map((item) => (<User {...item}/>))}
    </div>
  )
}
