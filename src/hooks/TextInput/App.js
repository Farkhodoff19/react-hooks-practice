import React, { useState, useRef } from "react";
import TextInput from "./textInput";

function App() {
  const [card, setCard] = useState("");
  const [phone,setPhone] = useState("");
  const [error,setError] = useState("");

  const cardEl = useRef();
  const phoneEl = useRef();

  const validate = () => {
    if(card.length < 16) {
      setError('card');
      cardEl.current.focus();
      return;
    }

    if(phone.length < 12) {
      setError('phone');
      cardEl.current.focus();
      return;
    }

    setError("");
  }

  return (
    <div className="App">
        <TextInput hasError={error === 'card'}
        placeholder={'Card'}
        update={setCard}
        value={card}
        ref={cardEl}
        />
        <TextInput hasError={error === 'phone'}
        placeholder={'Phone'}
        update={setPhone}
        value={phone}
        ref={phoneEl}
        />
        <button onClick={validate}>Send</button>
    </div>
  );
}

export default App;