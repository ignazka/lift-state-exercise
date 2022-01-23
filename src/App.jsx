import "./App.css";
import Child from "./components/Child";
import React from 'react'
import Calculator from './components/Calculator'
function App() {
  
  const [inputText, setInputText] = React.useState('')
  const [result, setResult] = React.useState(0)
  const writeInputValue = (childText) =>{

    setInputText(childText)

  }

  const calculate = (result) =>{
    setResult(result)
  }
  
  return (
    <div className="App">
      <Child onClickText={writeInputValue} textFromParent="This is a message from your Daddy" />
      <input type="text" value={inputText}></input>
      <Calculator>{calculate}</Calculator>
      <p>Ergebnis: {result}</p>
    </div>
  );
}

export default App;
