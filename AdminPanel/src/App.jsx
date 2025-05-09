import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import React from "react";
import Dashboard from "./Components/Dashboard";
import MyUser from "./Components/MyUser";
function App() {
  const isAuthenticated = localStorage.getItem("admin") === "true";

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/home/dashboard" element={<Dashboard />} />
      <Route path="/home/my-users" element={<MyUser />} />
    </Routes>
  );
}

export default App;
