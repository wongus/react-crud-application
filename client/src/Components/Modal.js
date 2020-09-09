import React, { useState } from "react";
import axios from "axios";

export default function Modal() {
  const [modalStatus, setModalStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleModal = () => {
    setModalStatus(!modalStatus);
  };

  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const addHandler = async () => {
    toggleModal()

    try {
      const resp = await axios.post("http://localhost:5000/users", {
        username: `${username}`,
        password: `${password}`,
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
    <div>
      <button className="button is-primary" onClick={toggleModal}>
        open modal
      </button>
      <div>
        <div className={`modal is-clipped ${modalStatus ? "is-active" : ""}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create a new account</p>
              <button className="delete" onClick={toggleModal} aria-label="close"></button>
            </header>
            <section className="modal-card-body">
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
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={addHandler}
                type="submit"
                disabled={!username || !password ? true : false}
              >
                Submit
              </button>
              <button className="button" onClick={toggleModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
