import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
