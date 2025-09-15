import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Accessibility from "./components/Accessability";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
<Navigation/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/accessibility" element={<Accessibility />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
