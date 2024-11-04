import React, { useEffect, useState } from 'react';
import './NoBeaches.css'

const NoBeaches = () => {
    const [audio] = useState(new Audio('/Vine Boom Sound Effect.mp3'));

    const playSound = () => {
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    useEffect(() => {
        playSound(); // Need to remove this if it breaks something
    }, [audio]);

    return (
        <div className="no-beaches-container">
            <h1 className="no-beaches-text">No Beaches?</h1>
            <button className="small-button" onClick={playSound}>
                Play Sound
            </button>
        </div>
    );
};

export default NoBeaches;





