import React from "react";
import "./App.css";

const App: React.FC<{ text?: String }> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <h1>Stack Oversions</h1>
      <input ref={inputRef} />
    </div>
  );
};

export default App;
