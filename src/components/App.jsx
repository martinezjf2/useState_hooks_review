import React, { useState } from "react";

function App() {
  const [count] = useState(0);

  function increase() {
    // count++;
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
