import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Activites from "./components/Activites";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Activites" element={<Activites />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
