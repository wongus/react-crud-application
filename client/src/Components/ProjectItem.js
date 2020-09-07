import React from "react";

export default function ProjectItem() {
  return (
    
      <div className="column is-one-third ">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <h1 className="title">DIKKE TITEL G</h1>
            </div>
          </div>
          <div className="card-image">
            <img
              className="is-horizontal-center"
              src={require("../images/kat.jpg")}
            />
          </div>
          <div className="card-content">
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia nisl id elit pharetra molestie. Mauris pulvinar
                condimentum erat a ornare. Fusce mattis quam eget ipsum
                vestibulum suscipit. Cras auctor ultrices fermentum. Vivamus ac
                orci sed neque consectetur consectetur nec ut tortor. Morbi
                varius arcu id sapien rhoncus fermentum. Suspendisse volutpat
                orci eu turpis finibus sollicitudin. Quisque elementum ut enim
                eget feugiat. Vestibulum pharetra magna sapien, aliquet pulvinar
                enim vehicula ac. Nullam molestie in libero quis viverra. Aenean
                ultricies pulvinar urna, id bibendum urna. Vestibulum malesuada
                sapien sed interdum euismod. Vestibulum volutpat tempor justo,
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
