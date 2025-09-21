import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-white"> 
      <Header className="line"/>
      <hr className="border-neutral-200" />
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
