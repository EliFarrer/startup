import React from 'react';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
    const [email, setEmail] = React.useState(props.email);
    const [password, setPassword] = React.useState('');

    function loginUser() {
        loginOrCreate('/api/auth/login');
    }

    function createUser() {
        loginOrCreate('/api/auth/create');
    }

    // both login and create are post requests to different endpoints and essentially have the same function
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) { // allows us to access something that may not be defined without throwing an error
          localStorage.setItem('email', email); // keep this so you can keep track of who is currently logged in
          props.onLogin(email);
        } else {
          const body = await response.json();
          alert(`⚠ Error: ${body.msg}`); // this is where the issue lies. I don't want it to show the other part of the login if we are not authenticated
        }
      }

    return (
        <form>
        {/* <!--login info--> */}
        <p>Login:</p>
        <div>
            <span> Email: </span>
            <input className="form-control-sm" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <span> Password: </span>
            <input className="form-control-sm" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button className='btn btn-primary' onClick={() => loginUser()} disabled={!email || !password}>Login</Button>
        <Button className='btn btn-secondary' onClick={() => createUser()} disabled={!email || !password}>Create Account</Button>
        </form>
    )
}