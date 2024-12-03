import styled from 'styled-components';

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'
const Color4 = '#D0D0D0' // BRANCO GELO

export const ContainerPlaylists = styled.div`
  margin: 0 2%;
  width: 95%;
  height: 82vh;
  border-radius: 15px;
  background-color: ${secondaryColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const PlaylistCard = styled.div`
  height: 320px;
  width: 250px;
  border-radius: 10px;
  background-color: ${terciaryColor};
  display: flex;
  flex-direction: column;
  margin: 18px;
  align-items: center;
  color: white;
`;

export const PlaylistTitle = styled.h3`
  font-size: 100%;
  margin: 10px 15%;
  white-space: nowrap;
  text-align: center;
  color: ${Color4};
`;

export const PlaylistDetailsButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #7933ae;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgPlaylist = styled.img`
  width: 60%;
  height: auto;
  margin-top: 8%;
  border-radius: 8px;
  display: block;
  align-self: center;
  object-fit: cover;
`;

export const MusicCardsInPlaylist = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${terciaryColor};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const CardsMusics = styled.div`
  margin-top: 15px;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const PlaySongButton = styled.a`
  background-color: ${terciaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease-in-out;
  img {
    width: 40px;  /* Ajuste o tamanho da imagem */
    height: 40px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const SongDetails = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  color: white;

  p {
    margin: 0;
    padding: 0;
    line-height: 1.1;
  }
`;

export const SongThumb = styled.img`
width: 80px;
heigth: 50px;
border-radius: 10px;
margin-left: 10px;
`;
