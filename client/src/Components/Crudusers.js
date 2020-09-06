import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./Users";

import { FaUserPlus, FaUser } from 'react-icons/fa';


export default function App() {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const fetchUsers = async () => {
    try {
      const result = await axios("http://localhost:5000/users");
      setUsers(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    fetchUsers();
  }, []);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const addHandler = async () => {
    try {
      const resp = await axios.post("http://localhost:5000/users", {
        firstname: `${firstname}`,
        lastname: `${lastname}`,
      });
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    setFirstName("");
    setLastName("");
    fetchUsers();
  };

  return (

    <section className="section is-mobile">
      <div className="container box">
        <div>
          <div>
            <h1 className="title">Add new users</h1>
        
            <div className="level">
              <input
                className="input is-mobile mb-2"
                value={firstname}
                onChange={firstNameHandler}
                type="text"
                placeholder="firstname"
              />
              <input
                className="input is-mobile mb-2 "
                value={lastname}
                onChange={lastNameHandler}
                type="text"
                placeholder="lastname"
              />
              <button
                className="button is-primary mb-2" 
                onClick={addHandler}
                type="submit"
                disabled={!firstname || !lastname ? true : false}
          
              >
               <FaUserPlus/>
              </button>
            </div>
          </div>
        </div>
        {users.map((user) => (
          <User
            key={user.id}
            {...user}
            user={user}
            setUsers={setUsers}
            users={users}

          />
        ))}
      </div>  
       
    </section>
  );
}
