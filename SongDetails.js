import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from './Modal';
import { AllDescItems, AllDetailsItems, DetailsItems, DetailsThumb } from '../styles/MusicsStyles';
import { getYouTubeThumbnail } from '../utils/getYouTubeThumbnail'; // Importando o utilitário
import LoadingText from '../utils/LoadingText'; // Importando o LoadingText
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function SongDetails({ isOpen, closeModal, songId }) {
  const [songDetails, setSongDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para buscar os detalhes da música
  const fetchSongById = async (songId) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Você precisa estar logado para visualizar os detalhes da música.');
      return null;
    }

    try {
      const response = await axios.get(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      return response.data.song; // Retorna apenas o objeto `song`
    } catch (error) {
      console.error('Erro ao buscar detalhes da música:', error.response || error.message);
      toast.error('Erro ao buscar os detalhes da música.');
      return null;
    }
  };

  // Efeito para buscar os detalhes quando a modal for aberta
  useEffect(() => {
    if (isOpen && songId) {
      setLoading(true);
      fetchSongById(songId).then((data) => {
        if (data) {
          setSongDetails(data); // Atualiza o estado com os detalhes da música
          setError('');
        }
        setLoading(false); // Encerra o estado de carregamento
      });
    }
  }, [isOpen, songId]);

  // Função para fechar a modal e resetar o estado
  const handleCloseModal = () => {
    setSongDetails(null); // Reseta os detalhes
    setError(''); // Limpa mensagens de erro
    setLoading(false); // Encerra qualquer estado de carregamento
    closeModal(); // Fecha a modal
  };

  // Renderização condicional da modal
  return (
    <>
      {loading ? (
        <LoadingText />
      ) : (
    <Modal isOpen={isOpen} closeModal={handleCloseModal}>
      <AllDescItems>
         {songDetails ? (
          <AllDetailsItems>
            {songDetails.url && (
              <DetailsThumb
              src={getYouTubeThumbnail(songDetails.url)}
              alt={`Capa do vídeo de ${songDetails.title} por ${songDetails.artist}`}
              aria-label={`Capa do vídeo de ${songDetails.title}`}
              />
            )}
             
            <DetailsItems>
            <strong>{songDetails.title || 'Não informado'}</strong>
            <p>{songDetails.artist || 'Não informado'}</p>
            </DetailsItems>
          </AllDetailsItems>
        ) : (
          null
        )}
      </AllDescItems>
    </Modal>
      )}
    </>
  );
}
