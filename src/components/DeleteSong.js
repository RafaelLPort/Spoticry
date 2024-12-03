import React from 'react';
import axios from 'axios';
import { DeleteButton } from '../styles/OpenPlaylistStyles';
import DeleteIcon from '../assets/Icons/Delete.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function DeleteSong({ songId, onDelete }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken'); // Recupera o token do localStorage

    if (!token) {
      toast.error('Token não encontrado. Você precisa estar logado.');
      return;
    }

    try {
      await axios.delete(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (onDelete) onDelete(songId); // Callback para atualizar a lista de músicas
      toast.success('Música deletada com sucesso!');  // Toast de sucesso
    } catch (error) {
      console.error('Erro ao deletar música:', error.response?.data || error.message);
      toast.error('Erro ao deletar a música. Tente novamente.');  // Toast de erro
    }
  };

  return (
    <DeleteButton 
      onClick={handleDelete} 
      aria-label="Deletar música"
      role="button"
      tabIndex={0}         
    >
      <img 
        src={DeleteIcon} 
        alt="Ícone de deletar música"
      />
    </DeleteButton>
  );
}
