import React from "react";

export default function ProjectItem() {
  return (
    <div className="column is-one-third ">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <h1 className="title">Catto, i like cattos</h1>
          </div>
        </div>
        <div className="card-image">
          <img
            alt=""
            className="is-horizontal-center"
            src={require("../images/kat.jpg")}
          />
        </div>
        <div className="card-content">
          <div className="">
            <p>
              Catto, i like cattosCatto, i like cattosCatto, i like cattosCatto,
              i like cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattosCatto, i like cattosCatto, i like
              cattosCatto, i like cattos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
