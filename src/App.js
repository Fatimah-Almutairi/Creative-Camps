import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import Programs from './components/Programs';
import Events from './components/Events';
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
        {/* <Route path="/Activites" element={<Activites />}></Route> */}
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
