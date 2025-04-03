import React from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';

export function Login({email, authState, onAuthChange}) {
  return (
    <main className="container-fluid text-center">
        <div>
        {authState !== AuthState.Unknowon && <h2>Welcome to MORSE</h2> /*if the auth state is unknown, it returns nothing, if it is not unknown, it will return the login prompt*/}
        {authState === AuthState.Authenticated && (
          /* authenticated case */
          <Authenticated email={email} onLogout={() => onAuthChange(email, AuthState.Unatuthenticated)}/>
        )}
        {authState === AuthState.Unatuthenticated && (
          /* unauthenticated case */
          <Unauthenticated 
            email={email} 
            onLogin={(loginEmail) => {
              onAuthChange(loginEmail, AuthState.Authenticated);
            }}/>
        )}

        </div>
    </main>
  );
}