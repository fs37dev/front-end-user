import React from 'react'
import InputLogin from '../components/inputlogin'
import Navbar from '../components/navbar'

function Login() {
  return (
    <>
        <Navbar/>
        
        <div className="card w-full border-l-green-300 image-full">
            <InputLogin/>
        </div>
    </>
  )
}

export default Login