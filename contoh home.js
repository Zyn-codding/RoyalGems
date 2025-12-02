import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home" style={{ backgroundColor: '#1a1a2e', color: '#f9c74f', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to RoyalGems 💎</h1>
      <p>Pilih game untuk top up:</p>
      <ul>
        <li><Link to="/ff">Free Fire</Link></li>
        <li><Link to="/mlbb">MLBB</Link></li>
        <li><Link to="/roblox">Roblox</Link></li>
        <li><Link to="/eafc">EA SPORTS FC</Link></li>
      </ul>
    </div>
  );
}

export default Home;
