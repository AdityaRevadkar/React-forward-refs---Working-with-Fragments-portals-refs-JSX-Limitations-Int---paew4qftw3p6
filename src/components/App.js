import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here 
  const newRef = useRef(null);

  const settingValue = () => {
    const inputValue = newRef.current.value;
    const textarea = document.getElementById("textarea");
   let values = inputValue;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };


 
  return (
    <div>
    <InputField  ref={newRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}


export default App;
