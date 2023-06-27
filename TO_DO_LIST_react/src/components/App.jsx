import React, { useState } from "react";

function App() {

  const [Text,setText]= useState("");
  const[_text,_setText]= useState([]);

  function addText(event){
    const {value}= event.target;
   
    setText(value);


  }
  function clicked(){

   
    _setText((prevItems)=>{
      return [...prevItems, Text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addText} type="text" />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { _text.map(todoitem=>{
            return (<li>{todoitem}</li>)
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
