import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DummyCounter from "./components/Counter";

function App() {
  const LINK_TITLE = "Hello world! (from const)";

  return (
    <div className="App">
      <header className="App-header">
        <DummyCounter />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {LINK_TITLE}
        </a>
      </header>
    </div>
  );
}

export default App;
