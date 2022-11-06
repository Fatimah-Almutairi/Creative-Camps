import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>

    </div>
  );
}

export default App;
