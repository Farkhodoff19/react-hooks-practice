import React, { useContext } from "react";
import { AlertContext } from "./App";

function Alert() {
    const alert = useContext(AlertContext)
    if(!alert) return null;
  return (
    <div 
    style={{
        background: "crimson", 
        padding: "20px",
        marginBottom: "10px", 
        textAlign: "center", 
        color: "white"
        }}
        >
        <h4 >This messgaes very important</h4>
    </div>
  )
}

export default Alert;
