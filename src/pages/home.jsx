import React from 'react'
import Navbar from '../components/navbar'
import { Route, Routes } from 'react-router-dom';
import HomeGet from '../components/homeget';
import HomeService from '../components/service';

function Home() {
  return (
    <>
      <HomeGet/>
      <HomeService/>
    </>
  );
}

export default Home