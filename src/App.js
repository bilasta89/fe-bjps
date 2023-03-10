import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '@components/login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
