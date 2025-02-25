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
              <NavLink className='navbar-brand' to=''><img src="logo.png" alt="logo" width="30px" height="30px" /> _ _ _ RS .</NavLink>
  
              {/* <!-- button elements --> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <NavLink className='nav-link' to=''>Login</NavLink>
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

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/play' element={<Play />} />
        <Route path='/scoreboard' element={<Scoreboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  
      <footer className="container-fluid">
        <p>Author: Eli Farrer <NavLink type="button" className="btn btn-link" to="https://github.com/EliFarrer/startup.git">GitHub</NavLink></p>
      </footer>
    </body>
    </BrowserRouter>
  )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}