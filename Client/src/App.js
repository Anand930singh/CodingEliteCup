import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import About from './pages/About/About'
import Prediction from './pages/Prediction/Prediction';
import Loader from './components/Loader/Loader';
import Offers from './pages/Offers/Offers';
import { Analytics } from "@vercel/analytics/react"
import ContactUs from './pages/ContactUs/ContactUs';
import MatchDetail from './pages/MatchDetail/MatchDetail';

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/predict" element={<Prediction />} />
              <Route exact path="/offers" element={<Offers />} />
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/matchdetail/:matchId/:team1Id/:team2Id" element={<MatchDetail />} />
            </Routes>
            <Footer />
            <Analytics/>
          </div>
        </Router>

      )}
    </div>
  );
}

export default App;
