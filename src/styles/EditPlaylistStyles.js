import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'

export const EditPlaylistH1 = styled.h1`
color: white;
`;

export const EditPlaylistNameInput = styled.input`
  background-color: ${terciaryColor};
  border: 3px solid ${primaryColor};
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: left;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  width: 80%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5)

  &::placeholder{
  font-style: italic;
  font-size: 20px;
  color: white;
  text-align: left;
  align-items: center;
  }

  &:focus {
    outline: none;
    border: 4px solid ${primaryColor};
  }
`;

export const SaveEditButton = styled.button`
margin-top: 25px;
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
`