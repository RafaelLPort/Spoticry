import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LoginBox, Title, Text, Input, ButtonLogin } from '../styles/LoginStyles';

export default function Login() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Home');
    };

    return (
    <Container>
        <LoginBox>
            <Title>LOGIN</Title>
            <Text>Digite seu usuario:</Text>
            <Input type="text" />
            <Text>Digite sua senha:</Text>
            <Input type="text" />
            <ButtonLogin onClick={handleButtonClick}>Login</ButtonLogin>
        </LoginBox>
    </Container>

      
    );
  }

