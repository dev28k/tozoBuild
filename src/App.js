import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className="row col-sm-12 g-0">
      <div className="col-sm-2">
        <Navbar />
      </div>

      <div className="col-sm-10">
        <HeaderBar />
        <div>In Progress....</div>
      </div>
    </div>
  );
}

export default App;
