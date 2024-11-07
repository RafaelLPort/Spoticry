import React from 'react';
import { HeaderUnlogged } from './components/Header'; 
import { Musicas } from './components/Musicas';
import { Playlists } from './components/Playlists';

function App() {
  return (
    <div className="App">
      <HeaderUnlogged />
      <Playlists />
      <Musicas />
    </div>
  );
}

export default App;
