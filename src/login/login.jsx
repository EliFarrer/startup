import React from 'react';

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
        <button className="btn btn-primary" type="submit">Login</button>
        <button className="btn btn-secondary" type="submit">Create Accont</button>
        </form>
        </div>
    </main>
  );
}