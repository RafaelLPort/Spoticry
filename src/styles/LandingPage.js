import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737' // CINZA MUITO CLARO
const Color4 = '#D0D0D0' // BRANCO GELO


export const IconStyled = styled.img`
  margin: 0 0 0 0.5%;
  width: 150px;
  height: 50px;
  display: flex;

`;

export const HeaderLanding = styled.div`
  padding: 15px;
  height: 50px;
  background-color: ${secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px
`;

export const H1 = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: ${Color4};
  font-size: 18px;
  font-weight: bold;
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