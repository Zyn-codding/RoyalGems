import React, { useState } from 'react';

function TopUpForm({ game }) {
  const [username, setUsername] = useState('');
  const [server, setServer] = useState('');
  const [fileTopUp, setFileTopUp] = useState(null);
  const [fileAdmin, setFileAdmin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order ${game} diterima!\nUsername: ${username}\nServer: ${server}\nBukti Top Up: ${fileTopUp?.name}\nBukti Admin: ${fileAdmin?.name}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h2>Top Up {game}</h2>
      <input type="text" placeholder="Username / ID" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="text" placeholder="Server" value={server} onChange={e => setServer(e.target.value)} required />
      <div>
        <label>Bukti Top Up:</label>
        <input type="file" onChange={e => setFileTopUp(e.target.files[0])} required />
      </div>
      <div>
        <label>Bukti Admin (1.500):</label>
        <input type="file" onChange={e => setFileAdmin(e.target.files[0])} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TopUpForm;
