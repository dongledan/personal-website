import React from "react";
import Home from "./components/Home";
import "./App.css";
import useTheme from '../src/components/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App">
      <Home theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
