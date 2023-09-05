import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here 

  const settingValue = () => {
    const inputValue = inputRef.current.querySelector("input").value;
    const textarea = document.getElementById("textarea");
    textarea.value = inputValue;
  };

  const focusInput = () => {
    inputRef.current.querySelector("input").focus();
  };
 
  return (
    <div>
    <InputField  ref={newRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea"></textarea>

    </div>
  );
}


export default App;
