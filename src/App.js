import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setEmail={setEmail} />} />
        <Route path="/home" element={<Home email={email} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
