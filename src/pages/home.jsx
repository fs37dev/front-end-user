import React from 'react'

import HomeGet from '../components/homeget';
import HomeService from '../components/service';
import Artikel from '../components/artike';
import ListDokter from '../components/listdoctor';
import HomeAbout from '../components/homeabout';

function Home() {
  return (
    <>
      <HomeGet/>
      <HomeService/>
      <Artikel/>
      <ListDokter/>
      <HomeAbout/>
    </>
  );
}

export default Home