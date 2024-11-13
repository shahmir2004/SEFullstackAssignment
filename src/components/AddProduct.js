import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [formData, setFormData] = useState({ name: '', price: '', description: '', category: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            alert('Product added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
            <input name="description" placeholder="Description" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProduct;
