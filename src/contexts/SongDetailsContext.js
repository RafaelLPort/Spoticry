// SongDetailsContext.js
import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const SongDetailsContext = createContext();

// Componente provedor que envolve os componentes que precisam acessar os detalhes da música
export const SongDetailsProvider = ({ children }) => {
  const [songDetails, setSongDetails] = useState(null);

  // Função para atualizar os detalhes da música
  const updateSongDetails = (details) => {
    setSongDetails(details);
  };

  return (
    <SongDetailsContext.Provider value={{ songDetails, updateSongDetails }}>
      {children}
    </SongDetailsContext.Provider>
  );
};

// Hook para acessar o contexto
export const useSongDetails = () => useContext(SongDetailsContext);
