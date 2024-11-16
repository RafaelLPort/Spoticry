import React from 'react';
import { HeaderHome } from '../components/Header';
import { Musics } from '../components/Musics';
import { Playlists } from '../components/Playlists';
import { Main } from '../styles/BodyStyles';

export default function Home() {
    return (
    <>
        <HeaderHome />
        <Main>
            <Playlists />
            <Musics />
        </Main>
    </>
      
    );
  }

