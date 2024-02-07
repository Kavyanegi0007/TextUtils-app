import React from 'react'
import './Navbar.css'

export default function Navbar( {darkmode, setdarkmode, bluemode, setbluemode } ){

  const darkModeset   = () => {
    setdarkmode(!darkmode)
  }

  const blueModeset   = () => {
    setbluemode(!bluemode)
  }


    return(
        <>
        <nav  className={bluemode ? "navbar bg-darkblue" : "navbar bg-dark"} >
  <div className="container-fluid">
    <a className="navbar-brand  text-white">TextUtils</a>
    
    <div className="d-flex align-items-center"> 
          <button className="btn btn-outline-light me-1" type='button' onClick={darkModeset}>Dark</button> {/* Add margin-right class for spacing */}
          <button className="btn btn-outline-primary" type='button' onClick={blueModeset}>Blue</button>
        </div>
    
  </div>
</nav>
        </>
    )
}