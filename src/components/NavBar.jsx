import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">News</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>


                  <li className="nav-item">
                    <Link className="nav-link" to="/business">business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/general">general</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">health</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">technology</Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar