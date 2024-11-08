import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  const name = 'Bohdan';
  const surname = 'Dudash';
  const city = 'Uzhorod';
  const hobby = 'Car';
  const group = 'IST-3';

  return (
    <Router>
      <Header 
        name={name} 
        surname={surname} 
        city={city} 
        hobby={hobby} 
        group={group} 
      />
      
      <nav>
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
      </nav>
      
      
      <Routes>
        <Route path="/page1" element={<Page1 city={city} />} />
        <Route path="/page2" element={<Page2 hobby={hobby} />} />
      </Routes>
      
      <Footer group={group} />
    </Router>
  );
};

export default App;

