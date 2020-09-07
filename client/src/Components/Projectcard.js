import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projectcard() {
  return (
    <div className="container">
     <div className="section">
       <div className="columns is-multiline">
         <ProjectItem/>
         <ProjectItem/>
         <ProjectItem/>
         <ProjectItem/>
       </div>
     </div>
    </div>
  );
}
