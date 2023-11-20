import React from 'react'
import Navbar from '../components/navbar'
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <div>
          <h1>Kami Siap Membantu Masalah Kesehatan Anda</h1>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Home