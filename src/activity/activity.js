import './activity.css';
import React, {useState} from 'react';

export default function ChooseActivity() {
    const [status, setStatus] = useState(true);
    const [optionLeft, setOptionLeft] = useState(false);
    const [optionRight, setOptionRight] = useState(false);
    
    const handleClick = () => {
        if (status === true) {
            setStatus(false);
            if (optionLeft === false){
                setOptionLeft(true);
                setOptionRight(false);
            } else {
                setOptionLeft(false);
                setOptionRight(true);
            }
        } else {
            setStatus(true);
        }
    };

    if (status === true){
        return (
            <div className="activity-container">
                <div className="container-title"></div>
                <div className="button-wrap">
                    <div className="button-left">
                        <button onClick={handleClick}>Meditate</button>
                    </div>
                    <div className="button-right">
                        <button onClick={handleClick}>Stretch</button>
                    </div>
                </div>
            </div>
        );
    } else if (status === false){
        if( optionLeft === true && optionRight === false){
            return (
                <div className="action-text">
                    Meditating
                </div>
            );
        } else if ( optionRight === true && optionLeft === false){
            return (
                <div className="action-text">
                    Stretching
                </div>
            );
        }
    }

}