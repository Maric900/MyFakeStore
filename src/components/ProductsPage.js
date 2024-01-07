import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsPage.css';
import { useCart } from './CartContext'; // Import useCart

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Use the addToCart function from CartContext
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        // Fetch products from the API
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
                // Extract unique categories from the products
                const uniqueCategories = [...new Set(response.data.map((product) => product.category))];
                setCategories(['all', ...uniqueCategories]);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        // Filter products based on the search term and category
        let filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (categoryFilter !== 'all') {
            filtered = filtered.filter((product) => product.category === categoryFilter);
        }

        // Sort products based on the selected option
        if (sortOption === 'expensive') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'cheapest') {
            filtered.sort((a, b) => a.price - b.price);
        }

        setFilteredProducts(filtered);
    }, [searchTerm, categoryFilter, sortOption, products]);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <h2>Products Page</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Category Filter Buttons */}
            <div>
                {categories.map((category) => (
                    <button key={category} onClick={() => setCategoryFilter(category)}>
                        {category}
                    </button>
                ))}
            </div>

            {/* Sort Buttons */}
            <div>
                <button onClick={() => setSortOption('expensive')}>Most Expensive</button>
                <button onClick={() => setSortOption('cheapest')}>Cheapest</button>
            </div>

            <div className="product-list">
                {/* Display filtered products */}
                {filteredProducts.map((product) => (
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
