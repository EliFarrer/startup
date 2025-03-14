import React from 'react';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
    const [username, setUsername] = React.useState(props.username);
    const [password, setPassword] = React.useState('');

    function loginUser() {
        loginOrCreate('/api/auth/login');
        props.onLogin(username);
    }

    function createUser() {
        loginOrCreate('/api/auth/create');
        props.onLogin(username);
    }

    // both login and create are post requests to different endpoints and essentially have the same function
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) { // allows us to access something that may not be defined without throwing an error
          localStorage.setItem('userName', userName);
          props.onLogin(username);
        } else {
          const body = await response.json();
          alert(`⚠ Error: ${body.msg}`);
        }
      }

    return (
        <form>
        {/* <!--login info--> */}
        <p>Login:</p>
        <div>
            <span> Email: </span>
            <input className="form-control-sm" placeholder="you@email.com" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
            <span> Password: </span>
            <input className="form-control-sm" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button className='btn btn-primary' onClick={() => loginUser()} disabled={!username || !password}>Login</Button>
        <Button className='btn btn-secondary' onClick={() => createUser()} disabled={!username || !password}>Create Account</Button>
        </form>
    )
}