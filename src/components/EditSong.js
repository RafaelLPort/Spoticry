import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../styles/CreatePlaylistStyles'; // Estilo do botão
import { EditSongItems, ImgEditSong, EditSongAllItems } from '../styles/EditSongStyles'
import IconEditSong from '../assets/Icons/CreatePlaylist.png'
import { Input } from '../styles/CreateSongStyles'
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function EditSong({ isOpen, closeModal, song, onSongUpdated }) {
  const [title, setTitle] = useState(song?.title || '');
  const [artist, setArtist] = useState(song?.artist || '');
  const [url, setUrl] = useState(song?.url || '');

  const handleEditSong = async () => {
    if (!title || !artist || !url) {
      toast.error('Todos os campos devem ser preenchidos.');  // Toast de erro
      return;
    }

    if (title === song.title && artist === song.artist) {
      toast.error('Você precisa alterar o Nome ou o Artista pelo menos.');
      return;
    }

    try {
      const token = localStorage.getItem('authToken'); // Recupera o token
      if (!token) {
        toast.error('Você precisa estar logado para editar músicas.');
        return;
      }

      const payload = { title, artist, url };

      toast.success('Música atualizada com sucesso!');
      onSongUpdated(song.id, payload); // Atualiza a música na lista
      closeModal(); // Fecha a modal após o sucesso
    } catch (error) {
      toast.error('Erro ao atualizar a música. Tente novamente.');
      console.error('Erro ao atualizar música:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Editar Música" aria-labelledby="Editar Musica Modal">
      <EditSongAllItems>

        <ImgEditSong src={IconEditSong} alt="Ícone de edição de música" aria-hidden="true"></ImgEditSong>
        <EditSongItems>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-describedby="song-title-error"
              placeholder="Digite o título da música"
            />
            <Input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              aria-describedby="song-artist-error"
              placeholder="Digite o nome do artista"
            />
            <Input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-describedby="song-url-error"
              placeholder="Digite a URL da música"
            />
          <Button type="button" onClick={handleEditSong} aria-label="Salvar alterações na música">
            Salvar Alterações
          </Button>
        </EditSongItems>
      </EditSongAllItems>
    </Modal>
  );
}
