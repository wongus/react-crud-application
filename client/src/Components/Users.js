import React from "react";
import axios from "axios";

export default function Users({ firstname, lastname, user, users, setUsers }) {
  const deleteHandler = () => {
    setUsers(users.filter((el) => el.id !== user.id));
    axios.delete(`http://localhost:5000/users/${user.id}`, {});
  };

  return (
    <div className="column is-parent">
        <div>
        </div>
      <h1 className="has-text-centered">
        name: {firstname} {lastname}
        <button className="button is-danger ml-3" onClick={deleteHandler}>
          delete
        </button>
        <button className="button is-primary ml-3">edit</button>
      </h1>

      <br></br>
    </div>
  );
}
