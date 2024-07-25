import { useState } from "react";

// App Component
function App() {
  const [name, setName] = useState("Amal");

  function UpdateName(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function ShowPopup() {
    alert(`Hola!, ${name}`);
  }

  return (
    <>
      <p>Current name:{name}</p>
      <p>Please enter your Name:</p>
      <input type="text" onChange={UpdateName}></input>
      <button onClick={ShowPopup}>Save</button>
    </>
  );
}

export default App;
