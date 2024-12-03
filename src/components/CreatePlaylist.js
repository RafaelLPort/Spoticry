import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from './Modal';
import { Button, ContainerItens, DescTextArea, NameInput, ImgCreatePlaylist } from '../styles/CreatePlaylistStyles'
import IconCreatePlaylist from '../assets/Icons/CreatePlaylist.png'
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify


export function CreatePlaylist({ isOpen, closeModal, userId }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [songs, setSongs] = useState([]);  // Estado para músicas, se necessário

  const handleCreatePlaylist = async () => {
    // Verificando se o nome e a descrição foram preenchidos
    if (!name || !description) {
      toast.error('Todos os campos devem ser preenchidos.');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Você precisa estar logado para criar playlists.');
        return;
      }

      // Construindo o payload com os dados da playlist
      const payload = {
        userId,
        songs: songs.length ? songs : [],  // Envia um array vazio se não houver músicas
        description,
        name,
      };

      // Enviando a requisição POST para a API
      const response = await axios.post(
        'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist',
        payload,
        {
          headers: {
            Authorization: `${token}`, // Passando o token de autenticação
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success('Playlist criada com sucesso!');  // Toast de sucesso
      setName('');
      setDescription('');
      setSongs([]);
      closeModal(); // Fecha o modal após a criação da playlist
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
      toast.error('Erro ao criar playlist. Tente novamente.');  // Toast de erro
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ContainerItens>
        <ImgCreatePlaylist 
          src={IconCreatePlaylist} 
          alt="Ícone de Criar Playlist" 
          aria-hidden="true"
        />
        <NameInput
          type="text"
          placeholder="Nome da Playlist"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Nome da Playlist"
        />
        <DescTextArea
          placeholder="Descrição da Playlist"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Descrição da Playlist"
        />
        <Button 
          onClick={handleCreatePlaylist} 
          aria-label="Criar Playlist" 
          type="button"
        >
          Criar Playlist
        </Button>
      </ContainerItens>
    </Modal>
  );
}
