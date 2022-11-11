import "./App.css";
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserData from "./components/UserData";

function App() {
  //CHANGE THEME 
  const toggleTheme = () => {
  const app = document.querySelector(".App");
  app.classList.toggle("dark")
}

  return (
  <div className="App">
    <div className="content">
    <Header toggleTheme={toggleTheme}/>
    <Search />
    </div>
  </div>
  );
}

export default App;
