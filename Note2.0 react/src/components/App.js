import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";
function CreateNotes(notes){
  return <Note title={notes.title} content={notes.content} />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map( CreateNotes)}
      <Footer />
    </div>
  );
}

export default App;
