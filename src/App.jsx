import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Home/>
    </div>
  );
}

export default App;
