import React, { useState } from 'react';
import { HeaderHome } from './HeaderHome'; 
import { Musics } from './Musics';

export function MainComponent() {
  const [order, setOrder] = useState('');

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  return (
    <div>
      <HeaderHome onOrderChange={handleOrderChange} /> {/* Passa a função handleOrderChange */}
      <Musics order={order} /> {/* Passa o valor do estado order */}
    </div>
  );
}
