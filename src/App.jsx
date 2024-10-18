import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <img className="logo" src="logo2.png" alt="logo" />
      <h3>Pronto...</h3>
      <div className="redes">
        <a className="spotify" href="">
          <i className="bi bi-spotify"></i>
        </a>
        <a className="instagram" href="">
          <i className="bi bi-instagram"></i>
        </a>
        <Link to="/random">RANDOMIZER</Link>
      </div>
    </>
  );
}

export default App;
