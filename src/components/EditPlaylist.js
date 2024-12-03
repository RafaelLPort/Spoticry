import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from './Modal'; // Importando o Modal
import { AddSongsItems } from '../styles/AddSongToPlaylistStyles'; // Usando os estilos existentes para o AddSong
import  IconEditPlaylist  from '../assets/Icons/CreatePlaylist.png'
import {ImgCreatePlaylist} from '../styles/CreatePlaylistStyles'
import { EditPlaylistH1, EditPlaylistNameInput, SaveEditButton } from '../styles/EditPlaylistStyles'
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function EditPlaylist({ isOpen, closeModal, playlistId, playlistName, onPlaylistUpdated,  playlistDescription }) {
  const [name, setName] = useState(playlistName); // Estado para o nome da playlist
  const [description, setDescription] = useState(playlistDescription);
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento

  // Função para atualizar a playlist
  const handleEditPlaylist = async () => {
    setLoading(true);

    if (!name.trim()) {
      toast.error('O nome da playlist não pode estar vazio!');
      setLoading(false);
      return;
    }

    if (!description.trim()) {
      toast.error('A descrição da playlist não pode estar vazio!');
      setLoading(false);
      return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Você precisa estar logado para editar a playlist.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.patch(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
        { name, description },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Playlist atualizada com sucesso!');  // Toast de sucesso
        onPlaylistUpdated(); // Notifica que a playlist foi atualizada
        closeModal(); // Fecha a modal
      }
    } catch (err) {
      console.error('Erro ao editar a playlist:', err);
      toast.error('Erro ao atualizar a playlist. Tente novamente.')
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setName(playlistName); // Atualiza o nome da playlist quando a modal abrir
      setDescription(playlistDescription)
    }
  }, [isOpen, playlistName, playlistDescription]);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} aria-labelledby="edit-playlist-modal" role="dialog">

      <AddSongsItems>
      <ImgCreatePlaylist src={IconEditPlaylist} alt="Ícone de editar playlist" aria-hidden="true" />
        <EditPlaylistH1 htmlFor="playlistName">Nome da Playlist:</EditPlaylistH1>
        <EditPlaylistNameInput
          id="playlistName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Atualiza o nome da playlist
          placeholder="Digite o novo nome da playlist"
          disabled={loading} // Desabilita o input durante o carregamento
          required
          aria-required="true"
        />

      <EditPlaylistNameInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição da playlist"
        />
      <SaveEditButton onClick={handleEditPlaylist} disabled={loading} aria-live="polite">
      {loading ? 'Salvando...' : 'Salvar Alterações'}
      </SaveEditButton>
      </AddSongsItems>
    </Modal>
  );
}
