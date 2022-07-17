import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {(!props.bio) || (props.bio === "") ? null : <p>{props.bio}</p>}    
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}



export default About;
