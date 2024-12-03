import React, { useEffect, useState } from 'react';
import { 
  ContainerMusics, 
  MusicCard, 
  ImgMusic, 
  ContainerBotao, 
  Contador, 
  BotaoContador,
  SongTitleH1,
  SongDetailsButton,
  SongArtistP,
  EditSongButton,
  MusicCardButtonsDiv,
  PlaySongButton,
  SongButtons 
} from '../styles/MusicsStyles';
import { EditSong } from './EditSong';
import { SongDetails } from './SongDetails';
import { decodeJWT } from '../utils/decodeJWT';
import { getYouTubeThumbnail } from '../utils/getYouTubeThumbnail'; // Importando o utilitário para a thumb
import { DeleteSong } from './DeleteSong';
import editSong from '../assets/Icons/EditButton.png'
import playSong from '../assets/Icons/Play.png';
import LoadingText from '../utils/LoadingText';
import axios from 'axios';
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function Musics({order}) {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(10);
  const [userId, setUserId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar as músicas
  const fetchSongsData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Token não encontrado');
        return;
      }

      // Decodificar o token JWT para obter o userId
      const decodedToken = decodeJWT(token);
      if (decodedToken) {
        setUserId(decodedToken.userId || decodedToken.sub || decodedToken.id); // Supondo que o userId está no token
      }

      const response = await axios.get(
        'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song',
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const songsData = response.data.songs || []; // Supondo que a resposta tenha a propriedade songs
      setSongs(songsData);
    } catch (error) {
      console.error('Erro ao carregar músicas:', error);
      toast.error('Erro ao carregar músicas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongsData();
  }, []);

    // Função para ordenar as músicas
    useEffect(() => {
      if (order === 'asc') {
        setSongs(prevSongs => [...prevSongs].sort((a, b) => a.title.localeCompare(b.title)));
      } else if (order === 'desc') {
        setSongs(prevSongs => [...prevSongs].sort((a, b) => b.title.localeCompare(a.title)));
      }
    }, [order]);

  const handleEditSong = (songId, updatedData) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) => (song.id === songId ? { ...song, ...updatedData } : song))
    );
  };

  const handleDeleteSong = (songId) => {
    setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songId));
  };

  const openEditModal = (song) => {
    setSelectedSong(song);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedSong(null);
    setIsEditModalOpen(false);
  };

  const openDetailsModal = (songId) => {
    setSelectedSongId(songId);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedSongId(null);
    setIsDetailsModalOpen(false);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(songs.length / songsPerPage);

  return (
    <>
    {loading ? (
        <LoadingText />
      ) : (
      <ContainerMusics>

        {currentSongs.map((song) => (
          <MusicCard key={song.id} role="article" aria-labelledby={`song-title-${song.id}`} tabIndex="0">
            <ImgMusic src={getYouTubeThumbnail(song.url)} alt={`Thumbnail da música ${song.title}`} />
            <SongTitleH1 id={`song-title-${song.id}`} aria-label={`Título da música ${song.title}`}>{song.title.length > 20 ? `${song.title.substring(0, 20)}...` : song.title}</SongTitleH1>
            <SongArtistP aria-describedby={`artist-description-${song.id}`}>{song.artist}</SongArtistP>
            {song.userId === userId && (
                <SongButtons>
                <EditSongButton aria-label={`Editar música ${song.title}`} onClick={() => openEditModal(song)}><img src={editSong} alt="Edit Song" role="button" tabIndex="0" /></EditSongButton>
                <DeleteSong songId={song.id} onDelete={() => handleDeleteSong(song.id)}/>
                </SongButtons>
              )}
            <MusicCardButtonsDiv>
            <PlaySongButton href={song.url} target="_blank"><img src={playSong} alt="Play Song" /></PlaySongButton>
            <SongDetailsButton aria-label={`Detalhes da música ${song.title}`} onClick={() => openDetailsModal(song.id)} role="button" tabIndex="0">Details</SongDetailsButton>
              </MusicCardButtonsDiv>
          </MusicCard>
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
      </ContainerMusics>
      )}

      {isDetailsModalOpen && selectedSongId && (
        <SongDetails
          isOpen={isDetailsModalOpen}
          closeModal={closeDetailsModal}
          songId={selectedSongId}
          userId={userId}
        />
      )}

      {isEditModalOpen && selectedSong && (
        <EditSong
          isOpen={isEditModalOpen}
          closeModal={closeEditModal}
          song={selectedSong}
          onSongUpdated={handleEditSong}
        />
      )}
    </>
  );
}
