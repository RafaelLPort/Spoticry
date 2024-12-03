import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify
import { fetchSongs } from '../utils/fetchSongs'; // Importando o util fetchSongs
import { AddSongLabel, AddSongsItems, Button } from '../styles/AddSongToPlaylistStyles'
import AddSongIcon from '../assets/Icons/CreateSong.png'

export function AddSongToPlaylist({ playlistId, closeModal }) {
  const [songId, setSongId] = useState(''); // Estado para armazenar o ID da música
  const [songs, setSongs] = useState([]); // Estado para armazenar as músicas
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento

  // Função para carregar as músicas da API usando o util fetchSongs
  const loadSongs = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('Token não encontrado. Você precisa estar logado.');
      return;
    }

    setLoading(true);
    try {
      const fetchedSongs = await fetchSongs(token); // Usando a função fetchSongs do util
      setSongs(fetchedSongs); // Armazena as músicas
    } catch (err) {
      console.error('Erro ao carregar músicas:', err);
      toast.error('Erro ao carregar músicas. Tente novamente.'); // Toast de erro
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSongs(); // Carregar músicas ao abrir a modal
  }, []);

  // Função para adicionar a música à playlist
  const handleAddSong = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Você precisa estar logado para adicionar músicas à playlist.');
      return;
    }

    if (!playlistId) {
      toast.error('Playlist inválida!'); // Exibe erro se o ID da playlist não for válido
      return;
    }

    try {
      const response = await axios.post(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song`, // Endpoint da API
        { songId }, // Corpo da requisição com o ID da música
        {
          headers: {
            Authorization: `${token}`, // Passa o token de autenticação
          },
        }
      );

      if (response.status === 200) {
        toast.success('Música adicionada à playlist com sucesso!'); // Toast de sucesso
        closeModal(); // Fecha o modal após adicionar a música
      }
    } catch (error) {
      console.error('Erro ao adicionar música à playlist:', error);
      toast.error('Erro ao adicionar música à playlist. Tente novamente.'); // Toast de erro
    }
  };

  return (
    <div role="dialog" aria-labelledby="add-song-dialog" aria-describedby="add-song-description">
      {/* Lista de músicas carregadas */}
      {loading ? (
        <p>Carregando Musicas...</p>
      ) : (
        
          <section aria-labelledby="song-selection-section">
            <header>
            </header>
            <AddSongsItems>
              <img 
                src={AddSongIcon} 
                alt="Ícone representando adicionar uma música à playlist"
                aria-hidden="true"
              />
              <AddSongLabel htmlFor="songId">Escolha a Música:</AddSongLabel>
              <select
                id="songId"
                value={songId}
                onChange={(e) => setSongId(e.target.value)}
                aria-label="Selecione uma música para adicionar à playlist"
                required
              >
                <option value="">Selecione uma música</option>
                {songs.length > 0 ? (
                  songs.map((song) => (
                    <option key={song.id} value={song.id}>
                      {song.title} - {song.artist}
                    </option>
                  ))
                ) : (
                  <option>Nenhuma Música disponível</option>
                )}
              </select>
              <Button 
                onClick={handleAddSong} 
                aria-label="Adicionar a música selecionada à playlist"
                disabled={loading || !songId}
              >
                Adicionar Música
              </Button>
            </AddSongsItems>
          </section>
        
      )}
    </div>
  );
}
