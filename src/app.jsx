import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scoreboard } from './scoreboard/scoreboard';
import { AuthState } from './login/authState'

export default function App() {
  const [email, changeEmail] = React.useState(localStorage.getItem('email') || '');
  const currentAuthState = email ? AuthState.Authenticated : AuthState.Unatuthenticated;
  const [authState, changeAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
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
                      {/* 
                      Note that && will return the first falsy operand or the last one if they are all truthy.
                      It also takes precedence over ===.
                      So if the first operand (===) is truthy, then it will return the second no matter what
                      If the first operand is falsy, then it will return that, but it will do nothing.
                      */}
                      {authState === AuthState.Authenticated && <li className="nav-item">  
                          <NavLink className='nav-link' to='play'>Play</NavLink>
                      </li>}
                      {authState === AuthState.Authenticated && <li>
                          <NavLink className='nav-link' to='scoreboard'>Scoreboard</NavLink>
                      </li>}
                  </ul>
              </div>
          </div>
          {authState === AuthState.Authenticated && 
          <NavLink className='nav-link btn btn-outline-secondary my-2 my-sm-0' type="submit" to='' onClick={() => changeAuthState(AuthState.Unatuthenticated)}>Logout</NavLink>
            //<button class="btn btn-outline-success my-2 my-sm-0" type="submit" to='index'>Logout</button>
          }
          </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login
          email={email}
          authState={authState}
          onAuthChange={(uName, aState) => {  // this function allows us to change the username and authenticated state from within other modules
            changeEmail(uName);
            changeAuthState(aState);
          }}
          />} exact />
        <Route path='/play' element={<Play 
        imageURL={'../public/background.png'}
        />} />
        <Route path='/scoreboard' element={<Scoreboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  
      <footer className="container-fluid">
        <p>Author: Eli Farrer <NavLink type="button" className="btn btn-link" to="https://github.com/EliFarrer/startup.git">GitHub</NavLink></p>
      </footer>
    </BrowserRouter>
  )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}