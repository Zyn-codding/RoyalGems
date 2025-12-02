import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#0f0f1e' }}>
      <h1>RoyalGems 💎</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/ff">FF</Link> | 
        <Link to="/mlbb">MLBB</Link> | 
        <Link to="/roblox">Roblox</Link> | 
        <Link to="/eafc">EA FC</Link> | 
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}

export default Header;
