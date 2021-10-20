import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetail from '../components/ItemDetail/ItemDetail'

const Home = () => {
  return (
    <main>
        <ItemDetail/>
        <ItemListContainer/>
    </main>
  );
};

export default Home;