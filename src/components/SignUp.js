// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/signup', formData);
            alert('User registered successfully');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        width: '300px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Signup;
