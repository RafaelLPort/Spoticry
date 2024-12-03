import styled from 'styled-components';

const primaryColor = '#7933AE'; //ROXO
const secondaryColor = '#1F1F1F' // CINZA MAIS CLARO
const terciaryColor = '#373737'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  background-color: ${terciaryColor};
  border: 3px solid ${primaryColor};
  padding: 10px;
  border-radius: 10px;
  color: white;
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

export const Button = styled.button`
  margin-top: 10px;
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

export const Message = styled.p`
  color: ${(props) => (props.error ? 'red' : 'green')};
  font-size: 14px;
  margin-top: 10px;
`;

export const ImgCreateSong = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 15px;
`;

