import { useState } from "react";

function App() {
  function UpdateName(event) {
    setName(event.target.value);
  }

  function ShowPopup() {
    alert("Hola!");
  }

  // const sum = addtwonumbers(4,5)
  const [name, setName] = useState("John");

  return (
    <>
      <p> Current name:{name} </p>
      <p>Please enter your Name:</p>
      <input type="text" onChange={UpdateName}></input>
      <button onClick={ShowPopup}>Save</button>
    </>
  );
}

export default App;
