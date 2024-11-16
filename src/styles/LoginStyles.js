// styles.js
import styled from 'styled-components';

const primaryColor = '#9933B7'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737' // CINZA MUITO CLARO
const Color4 = '#D0D0D0' // BRANCO GELO

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
`;

export const LoginBox = styled.div`
  background-color: #333;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 450px;
  width: 400px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 18px;
  margin: 10px 0 5px;
  display: block;
  font-weight: bold;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 5px 0 20px;
  background-color: #444;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid #555;
  }
`;

export const ButtonLogin = styled.button`
  width: 50%;
  height: 18%;
  margin-top: 5%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${primaryColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    // background-color: #5a0bac;
    transform: scale(1.15); /* Aumenta o tamanho do botão ao passar o mouse */
  }
`;
