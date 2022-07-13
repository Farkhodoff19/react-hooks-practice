import { useLayoutEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0)
  useLayoutEffect(() => {
    if(value === 0) {
      setValue(10 * Math.random() * 200)
    }
  }, [value])

  console.log('Render', value);
  return (
    <button onClick={() => setValue(0)}>
      {value}
    </button>
  );
} 