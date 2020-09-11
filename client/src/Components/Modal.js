import React, { useState } from "react";
import axios from "axios";

export default function Modal({loginModalStatus, setLoginModalStatus, toggleModal, setLoggedIn, toggleLoginModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  
  const addHandler = async () => {
    try {
      const resp = await axios.post("http://localhost:5000/authenticate", {
        username: `${username}`,
        password: `${password}`,
      }).then(function(response){
        console.log(response)
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Auth-Token'] = localStorage.getItem('token');
        setLoggedIn(true)
        setLoginModalStatus(false)
      }).catch(function(error) {
        console.log(error)
      });
  
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <div className={`modal is-clipped ${loginModalStatus ? "is-active" : ""}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head has-background-white-tert">
              <p className="modal-card-title has-text-centered is-size-2">Log in</p>
              <button className="delete" onClick={toggleLoginModal} aria-label="close"></button>
            </header>
            <section className="modal-card-body ">
              <div className="container">
                <div className="column is-fullwidth">
                  <div className="columns is-vcentered is-centered">
                    <div className="column">
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
                      <div className="column">
                        <h2 className="subtitle mb-1">Password*</h2>
                        <input
                          className="input"
                          value={password}
                          onChange={passwordHandler}
                          type="text"
                          placeholder="password"
                        />
                      </div>
                      <h2 className="column has-text-danger">* is required</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot has-background-white-ter">
              <button 
                className="button is-info ml-5"
                onClick={addHandler}
                type="submit"
                disabled={!username || !password ? true : false}
              >
                Submit
              </button>
              <button className="button" onClick={toggleLoginModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
