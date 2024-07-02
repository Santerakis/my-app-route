import React, {useEffect, useState} from 'react';

const Time = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prev => prev + 1 )
        }, 1000)

        return () => clearInterval(timerId)
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>{count}</h1>
            </header>
        </div>
    );
};

export default Time;