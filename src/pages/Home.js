import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { HeaderHome } from '../components/Header'; 
import { Main } from '../styles/BodyStyles'; 
import { BodyHome } from '../components/BodyHome';

export default function Home() {
  const navigate = useNavigate();
  const [order, setOrder] = useState('');  // Estado para controlar a ordenação das músicas
  const [view, setView] = useState('playlists'); // Estado para controlar a exibição (playlists ou musics)

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Usuário não autenticado. Redirecionando para login.');
      navigate('/Login'); // Redireciona para a página de login se não houver token
    }
  }, [navigate]);

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);  // Atualiza o estado de ordem quando o HeaderHome mudar
  };

  const handleViewChange = (newView) => {
    setView(newView);  // Atualiza o estado de visualização (playlists ou musics)
  };

  return (
    <>
      {/* Passando a função de ordenação e visualização para o HeaderHome */}
      <HeaderHome 
        onOrderChange={handleOrderChange} 
        onViewChange={handleViewChange} 
      />

      {/* Passando o estado de ordem e view para o BodyHome */}
      <Main>
        <BodyHome order={order} view={view} />
      </Main>
    </>
  );
}
