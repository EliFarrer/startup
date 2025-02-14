import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scoreboard } from './scoreboard/scoreboard';

export default function App() {
  return (
    <BrowserRouter>
    <body>
      <header>        
          {/* <!--navigation--> */}
          <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
  
                  {/* <!-- the href in the navbar is where it takes you when you click on the image --> */}
              {/* <!-- logo --> */}
              <a className="navbar-brand" href=".">
                  <img src="logo.png" alt="logo" width="30px" height="30px" />
                  _ _ _ RS .
              </a>
  
              {/* <!-- button elements --> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <NavLink className='nav-link' to='login'>Login</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className='nav-link' to='play'>Play</NavLink>
                      </li>
                      <li>
                          <NavLink className='nav-link' to='scoreboard'>Scoreboard</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
          </nav>
      </header>
  
      <main className="container-fluid text-center">
        Stuff displays here!
      </main>
  
      <footer className="container-fluid">
          <p3>Author: Eli Farrer <a type="button" className="btn btn-link" href="https://github.com/EliFarrer/startup.git">GitHub</a></p3>
      </footer>
    </body>
    </BrowserRouter>
  )
}