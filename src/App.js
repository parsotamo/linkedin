import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import Login from './components/pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
