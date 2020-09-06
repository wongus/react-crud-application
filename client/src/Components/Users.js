import React from "react";
import axios from "axios";

export default function Users({ firstname, lastname, user, users, setUsers }) {
  const deleteHandler = () => {
    setUsers(users.filter((el) => el.id !== user.id));
    axios.delete(`http://localhost:5000/users/${user.id}`, {});
  };

  return (
    <div className=" level is-mobile mt-5 ">
      <h1 className=" level-item level-left ml-1">
      name: {firstname} {lastname}
    </h1>
    <button
      className=" button level-right  is-danger ml-5"
      onClick={deleteHandler}
    >
      delete
      </button>
    <button className=" button level-right is-warning ml-3">
      edit
      </button>
    </div>
  );
}
