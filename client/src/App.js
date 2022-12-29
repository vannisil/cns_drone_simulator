import './App.css';
import { useEffect, useState } from "react";
import Cu from "./components/Cu";

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <div className="container">

        <h1>Create Path</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Create path..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="add">
            Add
          </div>

        </div>

        <div className="list">
          <Cu text="CU"></Cu>
          <Cu text="CU"></Cu>
          <Cu text="CU"></Cu>
        </div>

      </div>

    </div>
  );
}

export default App;
