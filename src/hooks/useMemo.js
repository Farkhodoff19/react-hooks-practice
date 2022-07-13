import React, { useState, useEffect, useMemo} from "react";

function complete(num) {
  let i = 0
  while(i < 10000000) i++
  return num * 2 
}

function App() {
  const [number, setNumber] =  useState(7)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => {
    return {
      color: colored ? 'crimson' : 'white'
    } 
  }, [colored]) 

  const computed = useMemo(() => {
    return complete(number)
  }, [number]) 

  useEffect(() => {

  }, [styles])

  return (
    <div className="container">
      <p style={styles}>Amount: {computed}</p> 
      <button onClick={() => setNumber((prev) => prev + 1)} className="success">Add</button>
      <button   onClick={() => setNumber((prev) => prev - 1)} className="danger">Delete</button>
      <button onClick={() => setColored((prev) => ! prev)} className="secondary"></button>
    </div>
  )
}

export default App;
