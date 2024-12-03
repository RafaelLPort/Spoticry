import React, { useState } from 'react';
import axios from 'axios';
import {DeleteSongIcon} from '../styles/OpenPlaylistStyles';
import DeleteIcon from '../assets/Icons/Delete.png'
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function DeleteSongFromPlaylist({ playlistId, songId, onDeleteSuccess }) {
  const [error, setError] = useState('');

  const handleDeleteSong = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Você precisa estar logado para deletar músicas.');
      return;
    }

    // Limpa os espaços antes de enviar o ID
    const trimmedSongId = songId.trim();  // Remover espaços extras do ID


    try {
      const response = await axios.delete(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song/${trimmedSongId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Música removida com sucesso!');
        onDeleteSuccess();  // Atualiza a lista de músicas após a remoção
      }
    } catch (err) {
      console.error('Erro ao tentar excluir música:', err);
      if (err.response) {
        console.error('Detalhes do erro:', err.response.data);
      }

      toast.error('Erro ao remover música da playlist. Tente novamente.');
    }
  };

  return (
    <div>
      {error && (
        <p role="alert" aria-live="assertive" style={{ color: 'red' }}>
          {error}
        </p>
      )}

      {(
        <p aria-live="polite" style={{ color: 'green' }} />
      )}

      <DeleteSongIcon 
        onClick={handleDeleteSong}
        aria-label="Excluir música da playlist"
        role="button"
        tabIndex={0}
      >
        <img 
          src={DeleteIcon} 
          alt="Ícone para excluir música"
          aria-hidden="true"
        />
      </DeleteSongIcon>
    </div>
  );
}
