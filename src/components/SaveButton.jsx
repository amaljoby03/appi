function SaveButton() {
  function ShowPopup() {
    alert("Hola!");
  }

  return <button onClick={ShowPopup}>Save</button>;
}

export default SaveButton;
