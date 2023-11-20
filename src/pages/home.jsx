import React from 'react'
import Navbar from '../components/navbar'
import { Route, Routes } from 'react-router-dom';
import HomeGet from '../components/homeget';

function Home() {
  return (
    <>
      <HomeGet/>
    </>
  );
}

export default Home