import React from "react";




function App() {
  setInterval(current,1000)

  let time = new Date().toLocaleTimeString();
  const [TIME,setTIME]= React.useState(time);
  function current(){
    const newTime= new Date().toLocaleTimeString();
    return setTIME(newTime);
  }
    
 
  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={current}>Get Time</button>
    </div>
  );
}

export default App;
