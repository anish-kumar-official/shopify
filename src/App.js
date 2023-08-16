import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contactus from "./Pages/Contactus/Contactus";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
