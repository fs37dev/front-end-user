import React from 'react'   

function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-5 bg-green-200">
      <h1 className="font-bold text-2xl font-sans">Klinik Heula</h1>
      <nav>
        <ul className="flex flex-row gap-9">
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>About Us</li>

          <li>Register</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar