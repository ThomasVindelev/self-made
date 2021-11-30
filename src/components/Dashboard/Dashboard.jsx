import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard({ onMouseEnter }) {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(`Count set ${count} times`);
    })

    useEffect(() => {
        console.log(`Number set ${number} times`);
    }, [number])

    useEffect(() => {
        console.log('Unique');
    }, [number, count])

    return (
        <div>
            <button onMouseMove={() => console.log('Moving')} onMouseEnter={() => onMouseEnter()} onClick={() => {
                setCount(count + 1);
                setNumber(number + 1);
            }}>Count</button>
            <button onClick={() => setNumber(number + 1)}>Number</button>

            <button onClick={() => {
                axios.post('localhost:8080/test')
                .then(() => {
                    console.log('test1234')
                })
            }}>Kald til API</button>

            <p>{count} count</p>
            <p>{number} number</p>
        </div>
    );
}