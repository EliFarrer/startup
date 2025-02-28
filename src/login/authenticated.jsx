import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export function Authenticated(props) {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem('username');
        props.onLogout();
    }

    return (
        <div>
        <h1>Hello {props.username}</h1>
        <Button className='btn btn-primary' to='play' onClick={() => navigate('/play')}>Play</Button>
        <Button className='btn btn-secondary' to='play' onClick={() => logout()}>Logout</Button>
        </div>
    )
}