import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FFTopUp from './pages/FFTopUp';
import MLBBTopUp from './pages/MLBBTopUp';
import RobloxTopUp from './pages/RobloxTopUp';
import EAFCTopUp from './pages/EAFCTopUp';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ff" element={<FFTopUp />} />
        <Route path="/mlbb" element={<MLBBTopUp />} />
        <Route path="/roblox" element={<RobloxTopUp />} />
        <Route path="/eafc" element={<EAFCTopUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
