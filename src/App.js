
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
// import Contact from './Component/Contact';
// import Home from './Component/Home';
// import Footer from "./Component/Footer"
import Actvitis from "./Component/Actvitis"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        {/* <Home></Home>    */}
        {/* <Contact></Contact>    */}
        {/* <Footer></Footer> */}
<Actvitis></Actvitis>
    </div>
  );
}

export default App;
