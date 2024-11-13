// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>E-commerce App</div>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/signin" style={styles.link}>Sign In</Link>
                <Link to="/signup" style={styles.link}>Sign Up</Link>
                <Link to="/counter" style={styles.link}>Counter</Link> {/* Link to Counter */}
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
};

export default Navbar;
