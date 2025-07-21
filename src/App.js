import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🏡 Home Page</h1>
      <p>This is the home page of your Render deployed app.</p>
      <Link to="/contact">
        <button>Go to Contact Page</button>
      </Link>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>📞 Contact Page</h1>
      <form>
        <input type="text" placeholder="Your name" /><br /><br />
        <input type="email" placeholder="Your email" /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
