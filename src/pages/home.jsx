import React from 'react'

import HomeGet from '../components/homeget';
import HomeService from '../components/service';
import Artikel from '../components/artike';

function Home() {
  return (
    <>
      <HomeGet/>
      <HomeService/>
      <Artikel/>
    </>
  );
}

export default Home