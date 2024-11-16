import styled from "styled-components";

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'


export const ContainerMusics = styled.div`
  // width: 100%;   
  // height: 100vh;  
  // display: column;
  // justify-content: space-between;
  // align-items: center;
  // margim-rigth: 2%;
  // margin: 2%;
  // padding-bottom: 2%;
  // position: relative;
  // background-color: ${secondaryColor};

  margin: 0 2%;
  width: 100%;
  height: 75vh;
  border-radius: 15px;
  background-color: ${secondaryColor};
  display: column;
  justify-content: space-between;
  padding: 15px;
`;

export const MusicCard = styled.div`

  height: 320px;
  width: 250px;
  border-radius: 10px;
  background-color: ${terciaryColor};
  display: column;

`;






// Div para quando for a playlist

// export const DivMusics = styled.div`

//   height: 90%;
//   width: 100%;
//   border-radius: 10px;
//   background-color: ${terciaryColor};
//   display: column;
//   // justify-content: ;

// // @media (max-width: 600px) {
// //     max-width: 150px;
// //     height: 250px;
// //     padding: 15px;
// //   }

// `;

