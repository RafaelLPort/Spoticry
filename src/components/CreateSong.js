import React, { useState } from 'react';
import axios from 'axios';
import { FormContainer, Form, Input, Button, ImgCreateSong } from '../styles/CreateSongStyles';
import CreateSongIcon from '../assets/Icons/CreateSong.png';
import { toast } from 'react-toastify';  // Importa o método toast
import 'react-toastify/dist/ReactToastify.css';  // Importa o estilo do Toastify

export function CreateSong({ onSongCreated }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken'); // Recupera o token do localStorage

    // Verificação de autenticação
    if (!token) {
      toast.error('Token de autenticação não encontrado. Você precisa estar logado.');
      return;
    }

    // Verificação de campos vazios
    if (!title || !artist || !url) {
      toast.error('Todos os campos são obrigatórios.');  // Mensagem de erro se algum campo estiver vazio
      return;
    }

    try {
      // Envio para a API
      const response = await axios.post(
        'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song',
        { title, artist, url },
        {
          headers: {
            Authorization: `${token}`, // Passando o token no cabeçalho de autenticação
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Música criada com sucesso!');  // Exibe mensagem de sucesso
        setTitle('');  // Limpa os campos após sucesso
        setArtist('');
        setUrl('');
        
        // Se o componente pai for passado, chama a função onSongCreated
        if (onSongCreated) onSongCreated(response.data);
      } else {
        toast.error('Erro ao criar a música. Tente novamente.');  // Caso a resposta não seja 200, exibe erro
      }
    } catch (error) {
      // Em caso de erro na requisição
      console.error('Erro ao criar música:', error);
      toast.error('Erro ao criar música. Tente novamente.');  // Exibe mensagem de erro de rede ou servidor
    }
  };

  return (
    <div>
      <head>
        <meta name="description" content="Crie sua música e adicione-a ao catálogo. Preencha o título, o artista e o link da música." />
      </head>

      <FormContainer>
        <ImgCreateSong src={CreateSongIcon} alt="Ícone de criar música" aria-hidden="true" />

        <Form onSubmit={handleSubmit} aria-labelledby="form-title">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Título da Música"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="title-helper"
          />
          <Input
            type="text"
            id="artist"
            name="artist"
            placeholder="Nome do Artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            aria-describedby="artist-helper"
          />
          <Input
            type="url"
            id="url"
            name="url"
            placeholder="URL da Música (ex: https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-describedby="url-helper"
          />
          <Button type="submit" aria-label="Criar música">
            Criar Música
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}
