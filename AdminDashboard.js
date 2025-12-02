import React from 'react';

function AdminDashboard() {
  return (
    <div style={{ padding: '20px', color: '#f9c74f', backgroundColor: '#1a1a2e', minHeight: '100vh' }}>
      <h1>Admin Dashboard</h1>
      <p>List order dummy:</p>
      <ul>
        <li>Free Fire - User1 - Pending</li>
        <li>Roblox - User2 - Completed</li>
        <li>MLBB - User3 - Pending</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
