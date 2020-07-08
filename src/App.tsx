import * as React from "react";
import "./App.css";

export interface AppProps {
  compiler: string;
  framework: string;
}

const App = (props: AppProps) => (
  <h1>
    Welcome from {props.compiler} and {props.framework}!
  </h1>
);

export default App;
