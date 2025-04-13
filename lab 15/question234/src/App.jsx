import React from "react";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
function App() {
  return (
    <div>
      <h1>Form Handling with useState and useRef</h1>
      <h2>Using useState:</h2>
      <Form1 />
      <h2>Using useRef:</h2>
      <Form2 />
    </div>
  );
}

export default App;
