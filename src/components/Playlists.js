import React, { useEffect, useState } from 'react';
import {
  ContainerPlaylist,
  DivPlaylist,
  TitlePlaylist,
  HeaderPlaylist,
  ButtonMais,
  PlaylistCard,
  PlaylistPlaceholderImage,
  PlaylistDescription,
  SearchPlaylistInput
} from '../styles/PlaylistsStyles';
import { decodeJWT } from '../utils/decodeJWT';
import { CreatePlaylist } from './CreatePlaylist';
import { OpenPlaylist } from './OpenPlaylist'; // Importando o novo componente OpenPlaylist
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] = useState(false);
  const [searchPlaylist, setSearchPlaylist] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // Playlist selecionada para exibição

  useEffect(() => {
    const fetchUserId = () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Token não encontrado. Faça login novamente.');
        return;
      }

      const decodedToken = decodeJWT(token);
      const extractedUserId = decodedToken?.userId || decodedToken?.sub || decodedToken?.id;
      if (extractedUserId) {
        setUserId(extractedUserId);
      } else {
        toast.error('Não foi possível identificar o usuário.');
      }
    };

    fetchUserId();
  }, []);

  const fetchPlaylists = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Você precisa estar logado para acessar as playlists.');
      return;
    }

    try {
      const response = await axios.get(
        'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist',
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const userPlaylists = response.data.playlists.filter(
        (playlist) => playlist._userId === userId
      );

      setPlaylists(userPlaylists || []);
      setFilteredPlaylists(userPlaylists || []);
    } catch (error) {
      toast.error('Erro ao carregar playlists. Tente novamente.');
    }
  };

  useEffect(() => {
    if (userId) {
      fetchPlaylists();
    }
  }, [userId]);

  useEffect(() => {
    if (searchPlaylist) {
      const filtered = playlists.filter(playlist =>
        playlist._name.toLowerCase().includes(searchPlaylist.toLowerCase())
      );
      setFilteredPlaylists(filtered);
    } else {
      setFilteredPlaylists(playlists); // Se não houver pesquisa, exibe todas as playlists
    }
  }, [searchPlaylist, playlists]);

  const handlePlaylistCreated = () => {
    setIsCreatePlaylistModalOpen(false);
    fetchPlaylists();
  };

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <>
      <head>
        <meta name="description" content="Explore e gerencie suas playlists e músicas favoritas." />
        <meta name="keywords" content="playlists, música, editar playlists, músicas favoritas" />
        <meta name="author" content="Sua Empresa" />
      </head>
    <ContainerPlaylist>
      <HeaderPlaylist id="playlist-header" aria-label="Seção de Playlists">
        <TitlePlaylist>Playlists</TitlePlaylist>
        <ButtonMais onClick={() => setIsCreatePlaylistModalOpen(true)}>+</ButtonMais>
      </HeaderPlaylist>

      <DivPlaylist>
        <SearchPlaylistInput
          type="text"
          placeholder="Pesquisar Playlist..."
          value={searchPlaylist}
          onChange={(e) => setSearchPlaylist(e.target.value)}
          aria-label="Pesquisar Playlist"
          role="search"
        />
        {filteredPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            onClick={() => handlePlaylistClick(playlist)}
          >
            <PlaylistPlaceholderImage>{playlist._name[0].toUpperCase()}</PlaylistPlaceholderImage>
            <PlaylistDescription>
              <h3>{playlist._name}</h3>
              {playlist._description.length > 50
                ? `${playlist._description.substring(0, 50)}...`
                : playlist._description}
            </PlaylistDescription>
            <p>{playlist._songs.length}</p>
          </PlaylistCard>
        ))}
      </DivPlaylist>

      <CreatePlaylist
        isOpen={isCreatePlaylistModalOpen}
        closeModal={() => setIsCreatePlaylistModalOpen(false)}
        userId={userId}
        onPlaylistCreated={handlePlaylistCreated}
      />

      {selectedPlaylist && (
        <OpenPlaylist
          playlist={selectedPlaylist}
          onClose={() => setSelectedPlaylist(null)} // Fechar a playlist
          onDeletePlaylistSuccess={fetchPlaylists} // Recarregar as playlists após deletar
        />
      )}
    </ContainerPlaylist>
    </>
  );
}
