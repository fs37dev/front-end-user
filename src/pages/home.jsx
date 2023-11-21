import React from 'react'

import HomeGet from '../components/homeget';
import HomeService from '../components/service';
import Artikel from '../components/artike';
import ListDokter from '../components/listdoctor';

function Home() {
  return (
    <>
      <HomeGet/>
      <HomeService/>
      <Artikel/>
      <ListDokter/>
    </>
  );
}

export default Home