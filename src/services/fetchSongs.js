import axios from 'axios';

export const fetchSongs = async (token) => {
  try {
    const response = await axios.get(
      'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song',
      {
        headers: {
          Authorization: `${token}`, // Passa o token para a autenticação
        },
      }
    );

    return response.data.songs || []; // Retorna a lista de músicas
  } catch (error) {
    console.error('Erro ao carregar músicas:', error);
    throw new Error('Erro ao carregar músicas da API');
  }
};
