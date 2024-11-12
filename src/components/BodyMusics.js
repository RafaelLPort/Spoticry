import React from 'react';
import { Musics } from './Musics';
import { ContainerMusics } from '../styles/MusicsStyles'; // Nome do styled-component com inicial maiúscula

export function BodyMusics() {
    return (
      <ContainerMusics>
          <Musics/>
      </ContainerMusics>
      
    );
  }