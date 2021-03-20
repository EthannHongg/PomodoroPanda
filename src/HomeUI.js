import React, {useState} from "react"

export const WorkButton = (props) => {
    const [counter, setCounter] = useState(0);

    const addDish = () => {
        setCounter(counter+1);
    };

    return (
        <div className = "WorkButton">
            <button onClick = {addDish}>Start<br></br>Working</button>
        </div>
    );
}

export const Transition = (props) => {
    const [counter, setCounter] = useState(0);

    const addDish = () => {
        setCounter(counter+1);
    };

    return (
        <div className = "Transition">
            <button onClick = {addDish}>{props.name}</button>
        </div>
    );
}

export const Currency = (props) => {
    return (
        <div className = "Currency">
            <p>{props.money}</p>
        </div>
    );
}
