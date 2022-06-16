import React from 'react';
import './App.css'
import {MyButton, MyInput} from 'mazal-ui-kit'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MyButton title="ClickMe" color="" ></MyButton><br />
       <MyButton title="Hello!" color="" big ></MyButton><br />
      
       <MyInput
         placeholder="Name"
         label="Name: "
         big={false}/>
      </header>    
    </div>
  );
}

export default App;
