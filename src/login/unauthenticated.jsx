import React from 'react';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
    const [username, setUsername] = React.useState(props.username);
    const [password, setPassword] = React.useState('');

    function loginUser() {
        localStorage.setItem('username', username);
        props.onLogin(username);
    }

    function createUser() {
        localStorage.setItem('username', username);
        props.onLogin(username);
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