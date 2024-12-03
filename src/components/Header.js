import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, LogoutButton, Pesquisa, Genero, Ordem, CreateMusicButton } from '../styles/HeaderStyles';
import { Modal } from './Modal';
import { CreateSong } from './CreateSong';
import logoutIcon from '../assets/Icons/Logout.png';

export function HeaderHome({ onSongCreated, onOrderChange, onViewChange }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados para gerenciar os valores selecionados
  const [genero, setGenero] = useState('');
  const [ordem, setOrdem] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const openModal = () => {
    setIsModalOpen(true); // Abre a modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha a modal
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setOrdem(newOrder); // Atualiza o estado local de ordem
    if (onOrderChange) {
      onOrderChange(newOrder); // Passa o valor de ordem para o componente pai (Musics)
    } else {
      console.error('onOrderChange não é uma função!');
    }
  };

  const handleViewChange = (event) => {
    onViewChange(event.target.value); // Chama a função de alternância para mudar a visualização
  };


  return (
    <Header role="banner" aria-labelledby="header-title">
      <LogoutButton onClick={handleLogout} aria-label="Sair do sistema"> <img src={logoutIcon} alt="Ícone de Logout" /> </LogoutButton>

      <Pesquisa type="text" placeholder="Pesquisar música..." aria-label="Digite o nome da música para pesquisa" />

      <Genero onChange={handleViewChange} aria-label="Escolha a visualização">
        <option value="playlists">Todas as Playlists</option>
        <option value="musics">Todas as Músicas</option>
      </Genero>

      <Ordem value={ordem} onChange={handleOrderChange} aria-label="Escolha a ordem">
        <option value="default">Ordem</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </Ordem>

      {/* Botão para abrir a modal de criar música */}
      <CreateMusicButton onClick={openModal} aria-label="Criar nova música">
        Criar Música
      </CreateMusicButton>

      {/* Modal de criação de música */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <CreateSong onSongCreated={onSongCreated} />
        </Modal>
      )}
      <meta name="description" content="Página principal com opções para pesquisar, ordenar e criar músicas e playlists." />
      <meta name="keywords" content="músicas, playlists, criar música, pesquisar música, ordenação" />
      <meta property="og:title" content="Página Inicial - Música e Playlists" />
      <meta property="og:description" content="Página principal com várias opções de pesquisa e interação com músicas e playlists." />
      <meta property="og:image" content="URL_da_imagem_geral_para_redes_sociais" />
      <meta name="robots" content="index, follow" />
    </Header>
  );
}
