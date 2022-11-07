import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Events from "./components/Events";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/About" element={<About />}></Route>


      </Routes>

    </div>
  );
}

export default App;
