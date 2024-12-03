import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'
const Color4 = '#D0D0D0' // BRANCO GELO


export const ContainerMusics = styled.div`
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


export const MusicCard = styled.div`
  height: 320px;
  width: 250px;
  border-radius: 10px;
  background-color: ${terciaryColor};
  display: flex;
  flex-direction: column;
  margin: 18px;
`;


export const ImgMusic = styled.img`
  width: 80%;
  height: 45%;
  margin-top: 8%;
  border-radius: 8px;
  display: block;
  align-self: center;
  object-fit: cover;
`;

export const ContainerBotao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const BotaoContador = styled.button`
  padding: 8px 50px;
  font-size: 20px;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  margin-right: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const Contador = styled.span`
  background-color: #121212; 
  padding: 5px 10px;
  border-radius: 25px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 80%;
  max-width: 200px;
  margin: 0 auto;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #d11a1d;
  }
`;


export const SongTitleH1 = styled.h1`
  font-size: 100%;
  margin: 0 15%;
  white-space: nowrap;
  text-align: center;
  color: ${Color4};
`;

export const SongArtistP = styled.p`
  margin: 0 15%;
  text-align: center;
  color: ${Color4};
  `;
  
  export const EditSongButton = styled.button`
   background-color: ${terciaryColor};
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: none;
    margin-top: 10px;

  
    img {
      width: 20px;  /* Ajuste o tamanho da imagem */
      height: 20px;
    }
  `;

export const SongDetailsButton = styled.button`
  width: 120px;  /* Definindo uma largura fixa */
  height: 40px;  /* Definindo uma altura fixa */
  padding: 8px 15px;
  font-size: 12px;
  background-color: #121212;
  color: white;
  border: solid${primaryColor} 3px;;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;   /* Alinha o conteúdo do botão (texto) verticalmente */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


export const MusicCardButtonsDiv = styled.div`
  margin-top: auto;
  margin-bottom: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlaySongButton = styled.a`
  background-color: ${terciaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease-in-out;
  img {
    width: 50px;  /* Ajuste o tamanho da imagem */
    height: 50px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const AllDescItems = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Garante que ocupe toda a largura disponível da modal */
  margin-bottom: 20px; /* Separação entre os elementos */
`;

export const AllDetailsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;


export const DetailsItems = styled.div`
  margin-bottom: 15px;
  width: 100%; /* Garante que ocupe toda a largura */
  padding-left: 20px; /* Alinha o conteúdo à esquerda */
  
  strong {
    font-size: 24px;
    color: white;
  }

  p {
    font-size: 18px;
    color: #ccc; /* Um tom mais claro para o artista */
  }
`

export const DetailsThumb = styled.img`
width: 100%;
  max-width: 350px;
  border-radius: 15px;
  margin: 20px 0; /* Adiciona margem em cima e embaixo para separar */
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 350px;
`;

export const SongButtons = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
`


