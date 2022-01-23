import React from 'react'
import './Calculator.css'
// app.js schreibt eine methode um ein ergebniss anzuzeigen
// diese methode wird an calculator übergeben in props
// calculator benutzt diese methode aus den props und gibt damit das ergebniss zurück

const Calculator = (props) =>{

const a = 13;
const b = 4;
const c = a + b;

console.log(props)
return(<div className="Calculator">
    <p>
   
    {props.children(c)} </p></div>)
}


export default Calculator