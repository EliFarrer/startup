import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <body>
      <header>        
          {/* <!--navigation--> */}
          <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
  
                  {/* <!-- the href in the navbar is where it takes you when you click on the image --> */}
              {/* <!-- logo --> */}
              <a class="navbar-brand" href=".">
                  <img src="logo.png" alt="logo" width="30px" height="30px" />
                  _ _ _ RS .
              </a>
  
              {/* <!-- button elements --> */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="play.html">Play</a>
                      </li>
                      <li>
                          <a class="nav-link" aria-current="page" href="scoreboard.html">Scoreboard</a>
                      </li>
                  </ul>
              </div>
          </div>
          </nav>
      </header>
  
      <main class="container-fluid text-center">
        Stuff displays here!
      </main>
  
      <footer class="container-fluid">
          <p3>Author: Eli Farrer <a type="button" class="btn btn-link" href="https://github.com/EliFarrer/startup.git">GitHub</a></p3>
      </footer>
    </body>
  
  )
}