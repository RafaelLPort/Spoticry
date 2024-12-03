import styled from "styled-components";

const primaryColor = "#7933AE"; // ROXO
const secondaryColor = "#1F1F1F"; // CINZA MAIS CLARO
const terciaryColor = "#373737"; // CINZA MAIS ESCURO

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.button`
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease-in-out;

  img {
    width: 45px;
    height: 50px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ContentDiv = styled.div`
  margin-top: 15px;
  border-radius: 10px;
  padding: 10px;
overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 5px;
  padding: 0;
  color: white;

  p {
    margin: 0;
    padding: 0;
    line-height: 1.1;
  }
`;

export const SongDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${terciaryColor};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const DeleteSongIcon = styled.button`
  background-color: ${terciaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease-in-out;
  margin-left: 15px;

  img {
    width: 27px;
    height: 35px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const DeleteSongPlaylistIcon = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
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

export const SongThumb = styled.img`
width: 80px;
heigth: 50px;
border-radius: 10px;
margin-left: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #373737;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease-in-out;

  img {
    width: 15px;
    height: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`