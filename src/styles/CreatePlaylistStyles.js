import styled from 'styled-components';

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'

export const Button = styled.button`
  margin-top: 50px;
  padding: 8px 50px;
  font-size: 20px;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  margin-right: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DescTextArea = styled.textarea`
  margin-top: 15px;
  background-color: ${terciaryColor};
  border: 3px solid ${primaryColor};
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: left;
  color: white;
  min-height: 100px;
  max-height: 300px;
  resize: vertical;

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


export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameInput = styled.input`
  margin-top: 15px;
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

export const ImgCreatePlaylist = styled.img`
    width: 50%;  /* Ajuste o tamanho da imagem */
    height: 50%;
`