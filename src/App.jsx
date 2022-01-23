import "./App.css";
import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";
// an input output lift state exercise
// you have two components: Input & Output
// you shall write a text in Input and it will added to a list and rendered in output
function App() {
  const initialText = {
    first: "bla",
  };

  // const [textFromInput, setTextFromInput] = React.useState("test");
  const getTextFromInput = (textFromInput) => {
    console.log({listOfTexts});
    setListOfTexts([textFromInput, ...listOfTexts])
  }
  const [listOfTexts, setListOfTexts] = React.useState([]);
  return (
    <div className="App">
      <Input getTextFromInputMethod={getTextFromInput} />
      <Output textForOutput={listOfTexts} />
    </div>
  );
}

export default App;
