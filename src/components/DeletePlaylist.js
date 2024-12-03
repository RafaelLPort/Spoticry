import React from 'react';
import axios from 'axios';
import { Buttons } from '../styles/OpenPlaylistStyles';
import DeleteIcon from '../assets/Icons/Delete.png';
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function DeletePlaylist({ playlistId, onDeleteSuccess }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken'); // Recupera o token do localStorage

    if (!token) {
      toast.error('Token não encontrado. Você precisa estar logado.');
      return;
    }

    try {
      await axios.delete(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      onDeleteSuccess(); // Chama o callback para atualizar a lista de playlists após a exclusão
      toast.success('Playlist deletada com sucesso!'); // Toast de sucesso
    } catch (error) {
      console.error('Erro ao deletar a playlist:', error);
      toast.error('Erro ao deletar a playlist. Tente novamente.'); // Toast de erro
    }
  };

  return (
    <Buttons 
      onClick={handleDelete} 
      aria-label="Deletar playlist"
      role="button"
      tabIndex="0"
    >
      <img 
        src={DeleteIcon} 
        alt="Ícone para deletar playlist"
      />
    </Buttons>
  );
}
