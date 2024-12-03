import styled from "styled-components";

export const ModalS = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #1F1F1F;
  width: 80%;
  max-width: 600px;
  max-height: 700px;
  color: black;
  z-index: 999;
  height: auto;
  padding: 30px;
`;

export const ModalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 30px;
  padding: 1px;

  &:hover {
    color: #b22222;
  }
`;

export const DescCompleta = styled.div`
  
`;

export const DescButton = styled.button`
  margin-left: 17px;
  border: none;
  background-color: transparent;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  padding: 1px;

  &:hover {
    color: #7fff00;
  }
`;

export const TitleModal = styled.h1`
  color: #7933AE;
  text-align: center;
  flex-grow: 1;
  margin-right: 30px;
`;


export const DivModal = styled.div`

position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  backdrop-filter: blur(3px); /* Aplica o desfoque */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998; /* Um nível abaixo da modal */
`;




export const Input = styled.input`
  /* Estilo para o campo de entrada de texto */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  /* Estilo para o botão principal */
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

export const ErrorMessage = styled.p`
  /* Estilo para a mensagem de erro */
  color: red;
  font-size: 14px;
`;


