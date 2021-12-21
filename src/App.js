import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, PortfolioPage, AboutPage, ContactPage } from './pages';
/*import { Footer } from './components'; can only do this with an index.js in components that imports and exports all the components. */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/*<h1 className='large-header'>Large boi</h1>
      <h1>This is heading 1</h1>
      <h2>this is heading 2</h2>
  <h3>Heading 3 here</h3>*/}
      <Navbar/>
      <Routes />
        {/*<Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} /> */}
      <Footer />
    </Router>
  );
}

export default App;
