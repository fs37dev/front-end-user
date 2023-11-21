import React from 'react'

import HomeGet from '../components/homeget';
import HomeService from '../components/homeservice';
import Artikel from '../components/homeartikel';
import ListDokter from '../components/listdoctor';
import HomeAbout from '../components/homeabout';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <HomeGet/>
      <HomeService/>
      <Artikel/>
      <ListDokter/>
      <HomeAbout/>
      <Footer/>
    </>
  );
}

export default Home