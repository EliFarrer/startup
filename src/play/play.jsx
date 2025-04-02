import React from 'react';
import { ScoreUpdates } from './scoreUpdates';
import { MorseGame } from './morseGame';


export function Play() {
    const [imageURL, setImageURL] = React.useState('');


    React.useEffect(() => {
        setImageURL('url(/background3.png)');
    });

    const email = localStorage.getItem('email');

  return (
    <main className="container-fluid">
        <ScoreUpdates/>
        <MorseGame imageURL={imageURL} email={email}/>
    </main>
  );
}