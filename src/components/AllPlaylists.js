import React, { useEffect, useState } from 'react';
import { 
  ContainerPlaylists, 
  PlaylistCard, 
  PlaylistTitle, 
  PlaylistDetailsButton,
  ImgPlaylist,
  MusicCardsInPlaylist,
  CardsMusics,
  PlaySongButton,
  SongDetails,
  SongThumb 
} from '../styles/AllPlaylistsStyles';  // Estilos para o componente
import axios from 'axios';
import { toast } from 'react-toastify'; // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify
import ImgAllPlaylists from '../assets/Icons/AllPlaylistsIcon.png';
import { Modal } from './Modal';  // **Aqui está a importação do Modal**
import { fetchSongs } from '../services/fetchSongs';  // Agora utilizamos o util para buscar as músicas
import { ContainerBotao, Contador, BotaoContador } from '../styles/MusicsStyles';
import LoadingText from '../utils/LoadingText';
import { getYouTubeThumbnail } from '../utils/getYouTubeThumbnail';
import playSong from '../assets/Icons/Play.png'

export function AllPlaylists() {
  const [playlists, setPlaylists] = useState([]);  
  const [error, setError] = useState('');  
  const [loading, setLoading] = useState(true);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [playlistsPerPage] = useState(10);  
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);  
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);

  // Função para abrir o modal com detalhes das músicas
  const handlePlaylistDetails = async (playlist) => {
    setSelectedPlaylist(playlist);
    setIsModalOpen(true);

    // Carregar as músicas da playlist
    try {
      const token = localStorage.getItem('authToken');
      const songs = await fetchSongs(token);  // Pega todas as músicas
      const playlistSongs = songs.filter(song => playlist._songs.includes(song.id));  // Filtra as músicas que estão na playlist
      setSongsInPlaylist(playlistSongs);  // Atualiza o estado com as músicas da playlist
    } catch (error) {
      toast.error('Erro ao carregar músicas');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    axios
      .get('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist', {
        headers: { Authorization: `${token}` }
      })
      .then((response) => {
        setPlaylists(response.data.playlists);
        setLoading(false);
      })
      .catch((error) => {
        setError('Erro ao carregar playlists');
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Exibe o LoadingText enquanto os dados estão sendo carregados
    return <LoadingText />;
  }

  const indexOfLastPlaylist = currentPage * playlistsPerPage;
  const indexOfFirstPlaylist = indexOfLastPlaylist - playlistsPerPage;
  const currentPlaylists = playlists.slice(indexOfFirstPlaylist, indexOfLastPlaylist);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(playlists.length / playlistsPerPage);

  return (
    <div>
      {/* Exibe as playlists */}
      <ContainerPlaylists>
      {currentPlaylists.map((playlist) => (
          <PlaylistCard key={playlist._id}>
            <ImgPlaylist src={ImgAllPlaylists} alt="Playlist" />
            <PlaylistTitle>{playlist._name}</PlaylistTitle>
            <p>{playlist._songs.length} músicas</p> {/* Exibindo a quantidade de músicas */}
            <PlaylistDetailsButton onClick={() => handlePlaylistDetails(playlist)}>
              Ver Músicas
            </PlaylistDetailsButton>
          </PlaylistCard>
        ))}

          <ContainerBotao>
          <BotaoContador 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            aria-label="Página anterior"
            role="button"
          >
            {'<'}
          </BotaoContador>
          
          <Contador>{currentPage} de {totalPages}</Contador>
          
          <BotaoContador 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            aria-label="Próxima página"
            role="button"
          >
            {'>'}
          </BotaoContador>
        </ContainerBotao>
      </ContainerPlaylists>

      {/* Modal que exibe as músicas da playlist selecionada */}
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title={selectedPlaylist ? selectedPlaylist._name : 'Detalhes da Playlist'}
      >
        <CardsMusics>
          {songsInPlaylist.length > 0 ? (
            songsInPlaylist.map((song) => (
              <MusicCardsInPlaylist key={song.id}>
                <a>
                <PlaySongButton href={song.url} target="_blank"><img src={playSong} aria-label={`Tocar música ${song.title}`} /></PlaySongButton>
                </a>
                <SongThumb src={getYouTubeThumbnail(song.url)} alt="YouTube Thumbnail" />
                <SongDetails>
                <p><strong>Título:</strong> {song.title}</p>
                <p><strong>Artista:</strong> {song.artist}</p>
                </SongDetails>
              </MusicCardsInPlaylist>
            ))
          ) : (
            <p>Sem músicas para exibir</p>
          )}
        </CardsMusics>
      </Modal>
    </div>
  );
}
