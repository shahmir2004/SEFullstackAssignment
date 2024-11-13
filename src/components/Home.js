// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Welcome to the E-commerce App</h2>
            <p>Please sign up or sign in to continue.</p>
            
            {/* Navigation Buttons */}
            <div style={{ marginTop: '20px' }}>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/signin" style={{ marginLeft: '10px' }}>
                    <button>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
