import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
