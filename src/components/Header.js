import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, LoginButton, Pesquisa, Genero, Ordem } from '../styles/HeaderStyles'

export function HeaderUnlogged() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/LandingPage');
  };

  return (
    <Header>
        <LoginButton onClick={handleButtonClick}>Login</LoginButton>
        <LoginButton>Login</LoginButton>

        <Pesquisa type="text" placeholder="Pesquisar música..."></Pesquisa>

        <Genero>
        <option value="" disabled selected>
          Gênero
        </option>
        <option value="ficticia1">Opção 1</option>
        <option value="ficticia2">Opção 2</option>
        </Genero>

        <Ordem>
        <option value="" disabled selected> Ord </option>
        <option value="ficticia1">Opção 1</option>
        <option value="ficticia2">Opção 2</option>
        </Ordem>
    </Header>
    
  );
}
