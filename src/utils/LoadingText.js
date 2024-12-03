import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animação para cada letra aparecer e desaparecer
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Container principal do texto
const TextContainer = styled.div`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  position: fixed;  /* Posiciona fixo na tela */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999; /* Garante que ficará acima de outros elementos */
backdrop-filter: blur(10px); /* Adiciona o efeito de desfoque no fundo */
  background-color: rgba(0, 0, 0, 0.4); /* Fundo semitransparente */
  
`;

// Estilo para cada letra com animação
const Letter = styled.span`
  display: inline-block;
  animation: ${fadeInOut} 2s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const LoadingText = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = 'SpotiCry...';
    const letterArray = text.split('').map((letter, index) => ({
      letter,
      delay: `${index * 0.3}s` // Delay para que cada letra apareça em um momento diferente
    }));
    setLetters(letterArray);
  }, []);

  return (
    <TextContainer>
      {letters.map((item, index) => (
        <Letter key={index} delay={item.delay}>
          {item.letter}
        </Letter>
      ))}
    </TextContainer>
  );
};

export default LoadingText;
