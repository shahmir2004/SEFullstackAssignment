import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            {products.map((product) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
