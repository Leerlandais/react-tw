
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Err404 from "./pages/Err404";
import NavBar from "./components/NavBar";

function App(props) {
  return (
        <Router>
        <div className={props.class}>
            <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={< Err404 />} />
          </Routes>
    </div>
        </Router>
  );
}

export default App;
