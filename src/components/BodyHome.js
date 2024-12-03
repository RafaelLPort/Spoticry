import React from 'react';
import { AllPlaylists } from './AllPlaylists'; 
import { Musics } from './Musics'; 
import { Playlists } from './Playlists';

export function BodyHome({ order, view }) {
  return (
    <>
      <Playlists/>
      <div>
      {view === 'playlists' ? (
        <AllPlaylists/> // Renderiza o componente de playlists
      ) : (
        <Musics order={order} /> // Renderiza o componente de músicas com ordenação
      )}
      </div>
    </>
  );
}
