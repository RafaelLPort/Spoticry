import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'


export const Header = styled.div`
  margin: 2%;
  border-radius: 15px;
  background-color: ${secondaryColor};
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const LoginButton = styled.button`
  background-color: ${primaryColor};
  padding: 5px 35px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 30px;
  color: white;
`;

export const Pesquisa = styled.input`
  background-color: ${terciaryColor};
  border: 3px solid ${primaryColor};
  padding: 3px;
  padding-right: 23%;
  padding-left: 1%;
  border-radius: 15px;
  box-sizing: border-box;
  text-align: left;
  margin: 0px 18%;

  &::placeholder{
  color: #D0D0D0;
  font-style: italic;
  font-size: 20px;
  text-align: left;
  }
`;

export const Genero = styled.select`
  background-color: ${primaryColor};
  padding: 0.5% 1%;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
`;

export const Ordem = styled.select`
  background-color: ${primaryColor};
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
`;

export const CreateMusicButton = styled.button`
  background-color: #7933ae;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoutButton = styled.button`
  background-color: ${secondaryColor};
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
`