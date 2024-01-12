import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditProduct = ({ onUpdate, onCancel }) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const navigate = useNavigate();

    //you have to use something other than a fetch if you are grabbing 
    //your product from the app.js
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`http://localhost:5000/products/${id}`);
            const data = await response.json();
            setProduct(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchProduct();
    }, [id]); 

    // State to manage form fields
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    // Effect to set form fields when product prop changes (initialization)
    useEffect(() => {
        if (product) {
        setName(product.name || '');
        setDescription(product.description || '');
        setPrice(product.price || '');
        setCategory(product.category || '');
        }
    }, [product]);

    // Function to handle form submission
    const onSubmit = (e) => {
        e.preventDefault();

        // Validate form fields (similar to your validation logic)
        if (!name || !description || !price || !category) {
        alert('Please fill in all fields');
        return;
        }

        // Convert the price to a string and check for the pattern
        const priceString = price.toString();
        const decimalCount = (priceString.split('.')[1] || []).length;

        if (decimalCount !== 2) {
        alert('Please add a price with two decimal places');
        return;
        }

/*         // Call the onUpdate function with the updated product data
        onUpdate({
        id: product.id, // Assuming product has an id
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        }); */

        // Construct the updated product object
        const updatedProduct = {
            ...product,
            name,
            description,
            price,
            category,
        };

        // Reset form fields
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');

        // Call the onUpdate function to update the product in the parent component
        onUpdate(updatedProduct);
        navigate(`/product/${updatedProduct.id}`);


    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Product</label>
                    <input
                    type='text'
                    placeholder="Add Product"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                    type='number'
                    placeholder="Add Price"
                    value={price}
                    onChange = {(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        placeholder="Add Description"
                        value={description}
                        rows="4"
                        cols="50"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                    type='text'
                    placeholder="Add Category"
                    value={category}
                    onChange = {(e) => setCategory(e.target.value)}
                    />
                </div>
                <input type="submit" value="updateProduct" />
{/*                 <button type="button" onClick={onCancel}>
                    Cancel
                </button> */}
            </form>
            <hr/>
            <div className='info'>
                <h4>previously saved product information:</h4>
                <h5>
                  { product.name }
                </h5>
                <p>
                  { product.price }
                </p>
                <p>
                  { product.description }
                </p>
            </div>
        </>
    );
};

export default EditProduct;