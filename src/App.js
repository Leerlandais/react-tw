
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Err404 from "./pages/Err404";

function App(props) {
  return (
        <Router>
        <div className={props.class}>

          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="*" element={< Err404 />} />
          </Routes>
    </div>
        </Router>
  );
}

export default App;
