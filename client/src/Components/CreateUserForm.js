import React, { useState } from "react";
import axios from "axios";
// import { FaUserPlus } from "react-icons/fa";

export default function App() {
  // const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const fetchUsers = async () => {
  //   try {
  //     const result = await axios("http://localhost:5000/users");
  //     setUsers(result.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordNameHandler = (e) => {
    setPassword(e.target.value);
  };

  const addHandler = async () => {
    try {
      const resp = await axios.post("http://localhost:5000/users", {
        firstname: `${username}`,
        lastname: `${password}`,
      });
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <section className="section columns is-centered ">
        <div className="card column is-half">
          <div className="card-header card-header-title is-centered">
            <h1 className="title">Create a new account</h1>
          </div>
          <div className="columns is-vcentered is-centered">
            <div className="card-content column">
              <div className="column fullwidth">
                <h2 className="subtitle mb-1 ">Username*</h2>
                <input
                  className="input"
                  value={username}
                  onChange={userNameHandler}
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="column fullwidth">
                <h2 className="subtitle mb-1">Password*</h2>
                <input
                  className="input"
                  value={password}
                  onChange={passwordNameHandler}
                  type="text"
                  placeholder="password"
                />
              </div>
              <div className="column">
                <button
                  className="button mb-2 is-primary"
                  onClick={addHandler}
                  type="submit"
                  disabled={!username || !password ? true : false}>
                  Submit
                </button>
                <h2 >* is required</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
