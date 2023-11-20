import React, { useState } from 'react'
import bgImage from '/login.png'
import { useNavigate } from 'react-router-dom'

function InputLogin() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    
  return (
    <>
    <figure><img src="" alt="bg" /></figure>
         <div className="card-body">
            
        </div>
    </>
  )
}

export default InputLogin