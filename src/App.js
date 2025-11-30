import React from "react";

function App() {
  const items = ["React", "JavaScript", "CSS"];
  
  return (
    <div>
      <h1>Dynamic List Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;