import './timer.css';
import React, { useState, useRef, useEffect } from 'react';

export default function Timer() {
    const [timer, setTimer] = useState(25*60);
    const [isActive, setIsActive] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        if (isActive === true) {
            clearInterval(countRef.current);
            setIsActive(false);
        } else {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        }
    };

    useEffect(() => {
        if (timer < 1){
            clearInterval(countRef.current);
            setIsActive(false);
        }
    }, [timer]);


    const formatMinutes = () => {
        const minutes = `${Math.floor(timer/60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return getMinutes;
    }
    
    const formatSeconds = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);

        return getSeconds;
    }

    return (
        <div className="timer">
            <div className="timer-container">
                <div className="timeDisplay">
                    {formatMinutes()} : {formatSeconds()}
                </div>
                <div className="timer-row-wrap"></div>
                <div className="timer-row">
                    <div className="buttons">
                        <button onClick={handleStart}>{isActive ? "PAUSE" : "START"}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

