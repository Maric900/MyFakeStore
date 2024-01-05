// ProductsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

import './ProductsPage.css';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="products-page">
            <h2>All products:</h2>

            {products.map((product) => (
                <a key={product.id}>
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title} />
                </a>
            ))}

        </div>

    );
};

export default ProductsPage;
