import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/profile" element={<UserProfile />} /> 
                    <Route path="/counter" element={<Counter />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
