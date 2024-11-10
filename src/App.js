import React from 'react';
import { HeaderUnlogged } from './components/Header'; 
import { Body } from './components/Body';
import { Playlists } from './components/Playlists';

function App() {
  return (
    <div className="App">
      <HeaderUnlogged />
      <Playlists />
      <Body />
    </div>
  );
}

export default App;
