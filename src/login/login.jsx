import React from 'react';
import { NavLink } from 'react-router-dom';


export function Login() {
  return (
    <main className="container-fluid text-center">
        <div>
        <h2>Login to MORSE</h2>
        <form>
        {/* <!--login info--> */}
        <div>
            <span> Email: </span>
            <input className="form-control-sm" placeholder="you@email.com" />
        </div>
        <div>
            <span> Password: </span>
            <input className="form-control-sm" type="password" placeholder="password" />
        </div>
        <NavLink className='btn btn-primary' to='play'>Login</NavLink>
        <NavLink className='btn btn-primary' to='play'>Create Account</NavLink>
        </form>
        </div>
    </main>
  );
}