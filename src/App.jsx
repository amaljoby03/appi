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
    <main className="flex justify-center min-h-screen items-center dark:bg-black dark:text-white">
      <div className="h-full flex flex-col gap-5 items-center">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-8xl lg:text-9xl">Name-inator</h1>
        <p className="md:text-2xl lg:text-4xl">Please enter your Name:</p>
        <input
          className="outline outline-2 px-2 py-1 rounded-lg dark:text-black"
          type="text"
          onChange={UpdateName}
        ></input>
        <button
          className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-full hover:bg-blue-600 active:bg-blue-700"
          onClick={ShowPopup}
        >
          Save
        </button>
      </div>
    </main>
  );
}

export default App;
