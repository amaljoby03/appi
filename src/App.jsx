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
    <div className="flex justify-center min-h-screen items-center">
      <div className="h-full flex flex-col gap-5 items-center">
        <p >Please enter your Name:</p>
        <input
          className="outline outline-2"
          type="text"
          onChange={UpdateName}
        ></input>
        <button
          className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-full"
          onClick={ShowPopup}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
