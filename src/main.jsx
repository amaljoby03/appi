import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from './button.jsx'
import Input from './input.jsx'
import SaveButton from './components/SaveButton.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button />    
    <Input /> 
    <SaveButton />
  </React.StrictMode>,
)
