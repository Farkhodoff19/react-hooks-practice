import React, { useState, useCallback } from "react";
import ItemList from "./hooks/ItemList";

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(0)

  const styles = {
    color: colored ? "crimson" : "white",
  }

  const genereteItem = useCallback( () => {
    return new Array(count).fill('').map((_, index) => `Element ${index + 1}`)
  },[count])

  return (
    <div className="container">
      <p style={styles}>Amount of count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} className="success">Add Count</button>
      <button onClick={() => setColored((prev) => !prev)} className="secondary">Change Color</button>
       
      <ItemList getItems={genereteItem}/>
    </div>
  )
}

export default App;
