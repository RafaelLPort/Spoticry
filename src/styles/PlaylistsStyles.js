import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'
const Color4 = '#D0D0D0' // BRANCO GELO

//aasdasda
export const ContainerPlaylist = styled.div`
  margin: 0 0 0 2%;
  min-width: 17%;
  height: 82vh;
  border-radius: 15px;
  background-color: ${secondaryColor};
  display: column;
  justify-content: center;
  align-items: center;
`;

export const DivPlaylist = styled.div`
  margin-left: 3%;
  margin-right: 3%;
  height: 85%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

`;


export const TitlePlaylist = styled.p`
  color: ${Color4};
  font-size: 50px;
  display: block;
  font-weight: bold;
  margin: 3%;
`;

export const HeaderPlaylist = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonMais = styled.button`
  background-color: ${primaryColor};
  padding: 1px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 50px;
  color: white;
  aspect-ratio: 1 / 1;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`


export const PlaylistCard = styled.div`
  width: 90%;
  background-color: #121212;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: ${Color4};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  p {
    margin-left: auto; /* Move o elemento para a extremidade direita */
    font-size: 14px;
    font-weight: bold;
    color: ${Color4};
  }
`;


export const PlaylistPlaceholderImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${primaryColor};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${Color4};
  margin-right: 15px; /* Espaço entre o ícone e o texto */
  flex-shrink: 0;
`;


export const PlaylistDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 16px;
    color: ${Color4};
    margin: 0;
  }

  p {
    font-size: 12px;
    color: #ccc;
    margin: 5px 0 0;

  }
`;

export const SearchPlaylistInput = styled.input`
  background-color: #121212;
  border: 4px solid ${primaryColor};
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: left;
  color: white;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5)

  &::placeholder{
  color: #D0D0D0;
  font-style: italic;
  font-size: 20px;
  text-align: left;
  align-items: center;
  }

  &:focus {
    outline: none;
    border: 4px solid ${primaryColor};
  }
`;