import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
  <a className="navbar-brand" href="/">To-Do App</a>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todo">To-Do List</Link>
      </li>
    </ul>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
