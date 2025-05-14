import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import React from "react";
import Dashboard from "./Components/Dashboard";
import MyUser from "./Components/MyUser";
import Transactions from "./Components/Transactions"
import Leads from "./Components/Leads";
import Sitewise from "./Components/Sitewise"
import Teams from "./Components/Teams"
function App() {
  const isAuthenticated = localStorage.getItem("admin") === "true";

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/home/dashboard" element={<Dashboard />} />
      <Route path="/home/my-users" element={<MyUser />} />
      <Route path="/home/transactions" element={<Transactions />} />
      <Route path="/home/leads" element={<Leads />} />
      <Route path="/home/sitewise" element={<Sitewise />} />
      <Route path="/home/my-team" element={<Teams />} />
    </Routes>
  );
}

export default App;
