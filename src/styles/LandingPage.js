import styled from "styled-components";

const primaryColor = '#9933B7'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737' // CINZA MUITO CLARO
const Color4 = '#D0D0D0' // BRANCO GELO


export const IconStyled = styled.img`
  margin: 0 0 0 0.5%;
  width: 140px;
  height: 45px;
  display: flex;

`;

export const ImgExample = styled.img`
  margin: 0 0 0 0.5%;
  width: 27%;
  height: 30%;
  display: flex;
  border-radius: 10px;
  margin-top: 30px;
`;

export const ImgGirl = styled.img`
  height: auto;
  border-radius: 10px; 
  max-width: 35%; 
  margin-right: 70px;
  padding: 0 15px;
  padding-top:
`;

export const HeaderLanding = styled.div`
  height: 70px;
  background-color: ${secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;  
  left: 0;
  width: 100%;  
  z-index: 1000;  
  padding: 3px 0;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  gap: 20px;  

`;

export const H1 = styled.p`
  color: #FFFFFF;
  font-size: 240%;
  font-weight: bold;
  // margin-top: 40px;
  width: 900px;
`;

export const H2 = styled.p`
  color: #FFFFFF;
  font-size: 240%;
  font-weight: bold;
  // margin-top: 40px;
  // width: 900px;
`;

export const TextHeader = styled.p`
  // color: ${Color4};
  font-size: 18px;
  font-weight: bold;

  
  text-decoration: none;
  color: ${Color4};
  transition: color 0.3s ease; 

  &:hover {
    color: ${primaryColor}; 
    cursor: pointer;
  }

`;

export const Text = styled.p`
  color: ${Color4};
  font-size: 18px;
  font-weight: bold;
  width: 50%
  text-align: left;
`;

export const TextAbout = styled.p`
  color: ${Color4};
  flex: 1; 
  max-width: 60%;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const LoginButtonLanding = styled.button`
  background-color: ${primaryColor};
  padding: 12px 35px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const DivTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 925px;
  background: linear-gradient(180deg, ${primaryColor} -5%, #121212 99%);
  color: white;
  text-align: center;
  padding: 20px;
  gap: 4px
  // padding-top: 700px;

`;

export const DivAbout = styled.div`
  display: flex;
  min-height: 1011px;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  padding: 20px;
  // background: linear-gradient(180deg, #121212 80%, ${primaryColor} 98%);
  
`;

export const DivTextAbout = styled.div`
  display: column;
  align-items: center;
  margin-left: 70px;
`;


export const DivDevs = styled.div`
  min-height: 900px;
  width: 100%;
  padding-top: 20px;
  text-align: center;
  background: linear-gradient(to bottom, transparent 0%, ${primaryColor} 50%, transparent 100%);
  
  display: flex; /* Define o uso do Flexbox */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column; /* Organiza os itens em coluna (opcional se já for padrão) */
  
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #333;
  color: white;
  width: 350px;
  min-height: 500px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export const PhotoCard = styled.img`
  // margin: 0 0 0 0.5%;
  width: 100%;
  height: 60%;
  display: flex;
  border-radius: 10px;
`;

export const Espacamento = styled.div`
  min-height: 76px;
`;
