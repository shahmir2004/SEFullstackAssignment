// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });

    useEffect(() => {
        // Fetch user data from local storage
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            setUser(savedUser);
        }

        // Fetch all products
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleAddProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/products', newProduct, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setProducts([...products, response.data]);
            setNewProduct({ name: '', description: '', price: '', category: '' });
            setShowAddForm(false);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>User Profile</h2>
            <div style={styles.profileBox}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            <h3>Product List</h3>
            <button onClick={() => setShowAddForm(!showAddForm)} style={styles.addButton}>
                {showAddForm ? 'Close Form' : 'Add Product'}
            </button>

            {showAddForm && (
                <form onSubmit={addProduct} style={styles.addForm}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={handleAddProductChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={handleAddProductChange}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleAddProductChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={newProduct.category}
                        onChange={handleAddProductChange}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.submitButton}>Add Product</button>
                </form>
            )}

            <div style={styles.productList}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} style={styles.productItem}>
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <button
                                onClick={() => deleteProduct(product._id)}
                                style={styles.deleteButton}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '80%',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    profileBox: {
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    productList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
    },
    productItem: {
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    addButton: {
        padding: '10px 20px',
        margin: '10px 0',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    addForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    submitButton: {
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    deleteButton: {
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default UserProfile;
