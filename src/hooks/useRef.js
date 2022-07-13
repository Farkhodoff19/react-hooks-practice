import React, { useState, useEffect , useRef} from "react";

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('default')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  },[value])

  const focus = () => inputRef.current.focus()

    return (
    <div className="container">
      <p>Amount of Rendering: {renderCount.current}</p>
      <p>Last value: {prevValue.current}</p>
      <input
      ref={inputRef} 
      type='text' 
      onChange={e => setValue(e.target.value)} 
      value={value}></input>
      <button onClick={focus} className="success">Click Me</button>
    </div>
  )
}

export default App;
