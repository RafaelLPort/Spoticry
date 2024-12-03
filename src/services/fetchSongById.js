//Util para pesquisar os detalhes da musica

import axios from 'axios';

export const fetchSongById = async (songId, token) => {
  if (!token) {
    console.error('Token não encontrado. Faça login novamente.');
    return null;
  }

  const trimmedSongId = songId.trim();

  try {
    const response = await axios.get(
      `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${trimmedSongId}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data.song;
  } catch (error) {
    console.error('Erro ao buscar música:', error);
    return null;
  }
};
