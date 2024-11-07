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
  margin: 0px 10%;

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