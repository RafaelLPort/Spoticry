import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { DeleteSongFromPlaylist } from './DeleteSongFromPlaylist';
import { DeletePlaylist } from './DeletePlaylist';
import { AddSongToPlaylist } from './AddSongToPlaylist';
import { fetchSongById } from '../services/fetchSongById';
import { EditPlaylist } from './EditPlaylist';
import { ButtonsDiv, Buttons, ContentDiv, SongDetails, SongDiv, DeleteSongPlaylistIcon, PlaySongButton, SongThumb } from '../styles/OpenPlaylistStyles'
import EditPlaylistIcon from '../assets/Icons/EditButton.png'
import AddSong from '../assets/Icons/Add.png'
import playSong from '../assets/Icons/Play.png'
import LoadingText from '../utils/LoadingText'; // Importando o LoadingText

// Função para pegar a thumbnail do YouTube
export const getYouTubeThumbnail = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return '';
};

export function OpenPlaylist({
  playlist,
  onClose,
  onDeletePlaylistSuccess
}) {
  
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);
  const [isAddSongModalOpen, setIsAddSongModalOpen] = useState(false); // Para modal de adicionar música
  const [isEditPlaylistModalVisible, setIsEditPlaylistModalVisible] = useState(false); // Para editar playlist
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const modalTitle = playlist._name;

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = [];
      const token = localStorage.getItem('authToken');

      for (let songId of playlist._songs) {
        const song = await fetchSongById(songId, token);
        if (song) {
          songs.push(song);
        }
      }

      setSongsInPlaylist(songs);
      setLoading(false);
    };

    if (playlist._songs && playlist._songs.length > 0) {
      fetchSongs();
    } else {
      setLoading(false); // Caso a playlist não tenha músicas, para o loading
    }
  }, [playlist._songs]);

  const handleDeleteSongSuccess = (songId) => {
    setSongsInPlaylist((prevSongs) => prevSongs.filter((song) => song.id !== songId));
  };

  const handleEditPlaylistClick = () => {
    setIsEditPlaylistModalVisible(true);
  };

  return (
    <>
    <meta name="description" content={`Ouça a playlist ${playlist._name}, com várias músicas para você curtir.`} />
    {loading ? (
        <LoadingText />
      ) : (
    <Modal isOpen={true} closeModal={onClose} title={modalTitle}>
      <ButtonsDiv>
        <Buttons onClick={handleEditPlaylistClick}><img src={EditPlaylistIcon} alt="EditPlaylistIcon"/></Buttons>
        <Buttons onClick={() => setIsAddSongModalOpen(true)}><img src={AddSong} alt="EditPlaylistIcon"/></Buttons>
        <DeletePlaylist
          playlistId={playlist._id}
          onDeleteSuccess={onDeletePlaylistSuccess}
        />
      </ButtonsDiv>
      <ContentDiv>
        {songsInPlaylist.length > 0 ? (songsInPlaylist.map((song, index) => (
          <SongDiv key={index} role="listitem">
            <p>
              <PlaySongButton href={song.url} target="_blank"><img src={playSong} aria-label={`Tocar música ${song.title}`} /></PlaySongButton>
            </p>
              <SongThumb src={getYouTubeThumbnail(song.url)}/>
            <SongDetails>
              <p><strong>Título:</strong> {song.title}</p>
              <p><strong>Artista:</strong> {song.artist}</p>
            </SongDetails>
            <DeleteSongPlaylistIcon>
              <DeleteSongFromPlaylist
                playlistId={playlist._id}
                songId={song.id}
                onDeleteSuccess={() => handleDeleteSongSuccess(song.id)}
              />
            </DeleteSongPlaylistIcon>
          </SongDiv>
        ))
        ) : (
          <p>Não há músicas nesta playlist.</p>
        )}
      </ContentDiv>

      {isAddSongModalOpen && (
        <Modal
          isOpen={isAddSongModalOpen}
          closeModal={() => setIsAddSongModalOpen(false)}
          title={'Add Song to Playlist'}
        >
          <AddSongToPlaylist
            playlistId={playlist._id}
            closeModal={() => setIsAddSongModalOpen(false)}
          />
        </Modal>
      )}

      {isEditPlaylistModalVisible && (
        <EditPlaylist
          isOpen={isEditPlaylistModalVisible}
          closeModal={() => setIsEditPlaylistModalVisible(false)}
          playlistId={playlist._id}
          playlistName={playlist._name}
          onPlaylistUpdated={onDeletePlaylistSuccess}
        />
      )}
    </Modal>
    )}
    </>
  );
}
