import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'
const Color4 = '#D0D0D0' // BRANCO GELO


export const ContainerPlaylist = styled.div`
  margin: 0 0 0 2%;
  width: 30%;
  min-height: 90%;
  border-radius: 15px;
  background-color: ${secondaryColor};
  display: column;
  justify-content: center;
  align-items: center;
`;

export const DivPlaylist = styled.div`
  margin: 3%;
  // width: 87%;
  height: 86%;
  border-radius: 10px;
  background-color: ${terciaryColor};
  display: column;
  // justify-content: ;

// @media (max-width: 600px) {
//     max-width: 150px;
//     height: 250px;
//     padding: 15px;
//   }

`;

export const TitlePlaylist = styled.p`
  
  color: ${Color4};
  font-size: 35px;
  margin: 10px;
  display: block;
  font-weight: bold;
  margin-top: 30px;

`;

export const HeaderPlaylist = styled.div`
  
  // margin: 0 0 0 2%;
  // width: 30%;
  // min-height: 90%;
  // border-radius: 15px;
  // background-color: ${secondaryColor};
  display: flex;
  justify-content: space-between;
  // align-items: center;

`;