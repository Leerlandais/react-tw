
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageErr404 from "./pages/PageErr404";
import NavBar from "./components/NavBar";
import PageTodo from "./pages/PageTodo";
import PageCalc from "./pages/PageCalc";
import PageForm from "./pages/PageForm"
import PageTest from "./pages/PageTest";

function App(props) {
  return (
        <Router>
        <div className={props.class}>
            <NavBar />
          <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/todo" element={<PageTodo />} />
              <Route path="/calc" element={<PageCalc />} />
              <Route path="/form" element={<PageForm />} />
              <Route path="/test" element={<PageTest />} />
              <Route path="*" element={< PageErr404 />} />
          </Routes>
    </div>
        </Router>
  );
}

export default App;
