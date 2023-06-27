import React from "react";
import Form from "./Form";
import Login from "./login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
     <Form IsRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
