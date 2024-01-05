// ProductsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ProductsPage.css";
import { useCart } from './CartContext'; // Import useCart

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Use the addToCart function from CartContext

    useEffect(() => {
        // Fetch products from the API
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <h2>Products Page</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <img src={product.image} alt={product.title} />
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;

