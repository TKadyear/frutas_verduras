import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/SingUp';
import Months from './pages/months';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>

    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/months" element={<Months />} />
      </Routes>
    </Router> */}
  </React.StrictMode>
);
