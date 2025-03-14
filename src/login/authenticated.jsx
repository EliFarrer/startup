import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export function Authenticated(props) {
    const navigate = useNavigate();
    async function logout() {
        const response = await fetch('/api/auth/logout', {
            method: 'delete',
        }).catch(() => {
            alert("logout failed");
        }).finally(() => {
            localStorage.removeItem('email');   // want to keep this to show the current user that is on
            props.onLogout();
        });
    }

    return (
        <div>
        <h1>Hello {props.email}</h1>
        <Button className='btn btn-primary' to='play' onClick={() => navigate('/play')}>Play</Button>
        <Button className='btn btn-secondary' to='play' onClick={() => logout()}>Logout</Button>
        </div>
    )
}