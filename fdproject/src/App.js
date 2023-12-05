import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Howtoorder from "./components/Howtoorder";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Signup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
