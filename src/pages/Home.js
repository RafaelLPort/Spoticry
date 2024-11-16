import React from 'react';
import { HeaderUnlogged } from '../components/Header';
import { Musics } from '../components/Musics';
import { Playlists } from '../components/Playlists';
import { Main } from '../styles/BodyStyles';

export default function Home() {
    return (
    <>
        <HeaderUnlogged />
        <Main>
            <Playlists />
            <Musics />
        </Main>
    </>
      
    );
  }

