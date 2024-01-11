import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProductsPage.css';
import { useCart } from './CartContext';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const fetchedProducts = response.data;
            setProducts(fetchedProducts);
            const uniqueCategories = [...new Set(fetchedProducts.map((product) => product.category))];
            setCategories(['all', ...uniqueCategories]);
            localStorage.setItem('products', JSON.stringify(fetchedProducts));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
            const uniqueCategories = [...new Set(storedProducts.map((product) => product.category))];
            setCategories(['all', ...uniqueCategories]);
            setLoading(false);
        } else {
            fetchData();
        }
    }, [fetchData]);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (categoryFilter !== 'all') {
            setFilteredProducts(filtered.filter((product) => product.category === categoryFilter));
        } else {
            setFilteredProducts(filtered);
        }

        // Sort products based on the selected option
        if (sortOption === 'expensive') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        } else if (sortOption === 'cheapest') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        }
    }, [searchTerm, categoryFilter, sortOption, products]);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleShowDetails = (productId) => {
        // You can navigate to the product details page using react-router-dom
        // You might need to set up your routes and use BrowserRouter in your application
        // This example uses the Link component to navigate to the product details page
        console.log(`Show details for product with ID: ${productId}`);
    };

    const displayProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Products Page</h2>

            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={category === categoryFilter ? 'active' : ''}
                        onClick={() => setCategoryFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div>
                <button
                    className={sortOption === 'expensive' ? 'active' : ''}
                    onClick={() => setSortOption('expensive')}
                >
                    Most Expensive
                </button>
                <button
                    className={sortOption === 'cheapest' ? 'active' : ''}
                    onClick={() => setSortOption('cheapest')}
                >
                    Cheapest
                </button>
            </div>

            <div className="product-list">
                {displayProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <img src={product.image} alt={product.title} />

                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>

                        {/* Add a "Show" button for each product */}
                        <Link to={`/ProductDetailsPage/${product.id}`}>
                            <button onClick={() => handleShowDetails(product.id)}>Show</button>
                        </Link>
                    </div>
                ))}
                <div className="button-container">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= filteredProducts.length}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
