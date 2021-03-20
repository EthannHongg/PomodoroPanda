import './timer.css';
import React, { useState, useRef, useEffect } from 'react';

export default function Timer() {
    const [timer, setTimer] = useState(1/6*60);
    const [isActive, setIsActive] = useState(false);
    const [isActiveR, setIsActiveR] = useState(false);
    const countRef = useRef(null);
    const [RorF, setRorF] = useState(false);

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

    const handleStartR = () => {
        if (isActiveR === true) {
            clearInterval(countRef.current);
            setIsActiveR(false);
        } else {
            setIsActiveR(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        }
    };

    useEffect(() => {
        if (timer < 1 && isActive === true){
            clearInterval(countRef.current);
            setIsActive(false);
            setTimer(1/12 * 60);
            setRorF(true);
        } else if (timer < 1 && isActiveR === true){
            clearInterval(countRef.current);
            setIsActiveR(false);
            setTimer(1/6 * 60);
            setRorF(false);
        }
    }, [timer, isActive, isActiveR]);

    const formatMinutes = () => {
        const minutes = `${Math.floor(timer/60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return getMinutes;
    }
    
    const formatSeconds = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);

        return getSeconds;
    }

    if( RorF === false ){
        return (
            <div className="timer-bodyF">
                <div className="title">Focus Time</div>
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
            </div>
        );
    } else if ( RorF === true ) {
        return (
            <div className="timer-bodyR">
                <div className="title">Break Time</div>
                <div className="timer">
                    <div className="timer-container">
                        <div className="timeDisplay">
                            {formatMinutes()} : {formatSeconds()}
                        </div>
                        <div className="timer-row-wrap"></div>
                        <div className="timer-rowR">
                            <div className="buttons">
                                <button onClick={handleStartR}>{isActiveR ? "PAUSE" : "START"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}