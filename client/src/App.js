import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './Components/Users'

export default function App() {
  const [users, setUsers] = useState([])
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')

  const firstNameHandler = (e) => {
    setFirstName(e.target.value)
  }
  const lastNameHandler = (e) => {
    setLastName(e.target.value)
  }

  const addHandler = () => {
    axios('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        firstname: `${firstname}`,
        lastname: `${lastname}`
      },
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
    console.log()
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(
        'http://localhost:5000/users',
      );
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container box is-ancestor is-vertical">
      <div className="level half-width">
        <form>
          <input className="input" onChange={firstNameHandler} type="text" placeholder="firstname" />
          <input className="input" onChange={lastNameHandler} type="text" placeholder="lastnames" />
          <button className="button is-primary" onClick={addHandler} type="submit">add</button>
        </form>
      </div>
      {users.map((user) => (<User key={user.id} {...user} user={user} setUsers={setUsers} users={users} />))}
    </div>
  )
}
