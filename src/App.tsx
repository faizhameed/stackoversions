import React from "react";
import "./App.css";
import QuestionList from "./Components/QuestionList";

const App: React.FC<{ text?: String }> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <h1>Stack Oversions</h1>
      <input ref={inputRef} />
      <QuestionList />
    </div>
  );
};

export default App;
