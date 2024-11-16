import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeaderLanding, Text, H1, H2, IconStyled, LoginButtonLanding, 
  DivTest, TextHeader, ImgExample, DivAbout, ImgGirl, TextAbout, 
  DivDevs, CardsContainer, Card, DivTextAbout, PhotoCard, Espacamento 
} from '../styles/LandingPage';
import IconWithName from "../assets/imgs/IconWithName.png";
import WebsiteExample from "../assets/imgs/WebsiteExample.png";
import Girl from "../assets/imgs/Girl.png";
import PhotoRafael from "../assets/imgs/PhotoRafael.png";

//Problemas:

// foto da garota nao responsivel
// cards iguais
// icone quando clicado volta ao topo

export default function LandingPage() {
  const divIntroRef = useRef(null);
  const divAboutRef = useRef(null);
  const divDevsRef = useRef(null);

  // Função para scroll suave
  const handleScroll = (e, sectionRef) => {
    e.preventDefault(); 
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Login');
  };

  return (
    <>
      <HeaderLanding>
        <IconStyled src={IconWithName} onClick={(e) => handleScroll(e, divIntroRef)} alt="Icon Spoticry" />
        {/* Links com scroll suave para as seções */}
        <TextHeader href="#" onClick={(e) => handleScroll(e, divAboutRef)}>About</TextHeader>
        <TextHeader href="#" onClick={(e) => handleScroll(e, divDevsRef)}>Creators</TextHeader>
        <LoginButtonLanding onClick={handleButtonClick}>Login</LoginButtonLanding>
      </HeaderLanding>

      <Espacamento ref={divIntroRef}></Espacamento>
      <DivTest>
        <H1>Spoticry transforms the way you enjoy and organize your music!</H1>
        <Text>
          On Spoticry, music is just the way you like it! Explore a huge catalog, create playlists for any occasion, and get personalized recommendations.
          Relax, focus, or amp up the party with the best of music. Discover new releases, follow your favorite artists, share playlists, and stay updated on what's trending.
          Organize your tunes and get suggestions based on your taste. Jump into Spoticry and take your music experience to the next level!
        </Text>
        <ImgExample src={WebsiteExample} alt="Website Example" />
      </DivTest>

      <DivAbout ref={divAboutRef}>
        <DivTextAbout>
          <H1>What is Spoticry?</H1>
          <TextAbout>
            Spoticry is a music app that offers a personalized experience for managing, discovering, and organizing your favorite playlists and tracks.
            Create playlists, explore new releases, follow artists, share songs, and even adjust recommendations for every moment of your day.
            Customize everything so you can enjoy your music your way. Simply log in to your account and start exploring the world of music with Spoticry!
            With Spoticry, you can enjoy a wide variety of features designed to enhance your music experience.
            Whether you’re looking for the latest hits or rediscovering timeless classics, Spoticry tailors your musical journey based on your tastes.
            The app helps you stay connected with your favorite artists, offering up-to-date releases, concerts, and exclusive content.
            Share your discoveries with friends, and engage with the global music community by exploring new genres, trending songs, and collaborative playlists.
            Enjoy a seamless and intuitive interface that makes organizing and discovering music a breeze. Start creating, sharing, and enjoying music like never before with Spoticry!
          </TextAbout>
        </DivTextAbout>
        <ImgGirl src={Girl} alt="Girl" />
      </DivAbout>

      <DivDevs ref={divDevsRef}>
        <H2>Website Creators</H2>
        <CardsContainer>
          <Card>
            <PhotoCard src={PhotoRafael} alt="Photo Rafael" />
            <H2>Rafael Portugal</H2>
            <Text>Email de contato: rafaelportugald.e@gmail.com</Text>
          </Card>
          <Card>
            <PhotoCard src={PhotoRafael} alt="Photo Rafael" />
            <H2>Rafael Portugal</H2>
            <Text>Email de contato: rafaelportugald.e@gmail.com</Text>
          </Card>
          <Card>
            <PhotoCard src={PhotoRafael} alt="Photo Rafael" />
            <H2>Rafael Portugal</H2>
            <Text>Email de contato: rafaelportugald.e@gmail.com</Text>
          </Card>
        </CardsContainer>
      </DivDevs>
    </>
  );
}
