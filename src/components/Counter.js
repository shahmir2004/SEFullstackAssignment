// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={styles.container}>
            <h2>Counter</h2>
            <p style={styles.countDisplay}>Count: {count}</p>
            <button onClick={increment} style={styles.button}>Increment</button>
            <button onClick={decrement} style={styles.button}>Decrement</button>
            <button onClick={reset} style={styles.button}>Reset</button>
        </div>
    );
}

const styles = {
    container: {
        width: '200px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    countDisplay: {
        fontSize: '24px',
        margin: '10px 0',
    },
    button: {
        margin: '5px',
        padding: '10px 15px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Counter;
