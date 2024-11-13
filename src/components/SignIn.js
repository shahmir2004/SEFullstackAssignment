// src/components/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // React Router hook for navigation

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', formData);
            alert('Login successful');
            
            // Save token and user information in local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirect to the User Profile page
            navigate('/profile');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
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
                <button type="submit" style={styles.button}>Sign In</button>
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

export default Signin;
