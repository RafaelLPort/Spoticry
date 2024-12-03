import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Container, LoginBox, Title, Text, Input, ButtonLogin } from '../styles/LoginStyles';
import {HeaderLanding, IconStyled} from '../styles/LandingPage'
import IconWithName from "../assets/imgs/IconWithName.png";
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify
import LoadingText from '../utils/LoadingText';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  // Estado de loading

  // Verificar se o token é válido ao carregar o componente
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; //segundos
        if (decodedToken.exp > currentTime) {
          navigate('/Home'); // Redireciona para a página Home
        } else {
          localStorage.removeItem('authToken'); // Remove token expirado
        }
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        localStorage.removeItem('authToken'); // Remove token inválido
      }
    }
  }, [navigate]);

  const backToLanding = () => {
    navigate('/');
  };

  // Função de login
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos.'); // Mensagem de erro caso o e-mail ou senha esteja vazio
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/user/login',
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      if (token) {
        localStorage.setItem('authToken', token);  // Armazena o token no localStorage
        toast.success('Login bem-sucedido!');  // Toast de sucesso
        navigate('/Home');  // Redireciona para a página Home
      }
    } catch (error) {
      toast.error('Erro ao fazer login. Verifique suas credenciais e tente novamente.');  // Toast de erro
    }
  };

  return (
    <>
      {loading ? (
        <LoadingText />
      ) : (
        <>
          <HeaderLanding>
            <IconStyled src={IconWithName} onClick={backToLanding} alt="Icon Spoticry" />
          </HeaderLanding>
          <Container>
            <LoginBox>
              <Title>LOGIN</Title>
              <Text>Digite seu email:</Text>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Text>Digite sua senha:</Text>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
              {/* {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>} */}
            </LoginBox>
          </Container>
        </>
      )}
    </>
  );
  
}
