import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import HomePage from './components/HomePage';
import Programs from './components/Programs';
import Events from './components/Events';
import About from './components/About';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Activites from "./Activites";


function App() {
  console.log('Hello');

  return (
    <div className="App">
      {/* <Nav /> */}

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/Programs" element={<Programs />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>


    </div>
  );
}

export default App;