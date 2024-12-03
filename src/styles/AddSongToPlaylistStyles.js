import styled from "styled-components";

export const AddSongLabel = styled.label`
    color: white;
    margin-top: 50px;
    margin-bottom: 15px;

`;

export const AddSongsItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  img {
    width: 50%;
    height: 50%;
  }
`

export const Button = styled.button`
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
`;


