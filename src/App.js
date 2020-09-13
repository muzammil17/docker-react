import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello world!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          i was changed from feature branch
        </a>
      </header>
    </div>
  )
}

export default App
