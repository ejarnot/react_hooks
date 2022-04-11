import React, { Component } from "react";
import "./App.css";
import Tasks from "./components/OverviewClass.jsx";

class App extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React Hooks</h1>
        <Tasks></Tasks>
      </main>
    );
  }
}

export default App;
