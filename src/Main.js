import React from "react";

function Main({ toggle }) {
  return (
    <>
        <p>Hello from Context</p>
        <button onClick={toggle} className="success">Show Alert</button> 
    </>
  )
}

export default Main;
