import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    /* const [reminder, setReminder] = useState(false) */

    const onSubmit = async (e) => {
        e.preventDefault();
      
        if (!name || !description || !price || !category) {
          alert('Please fill in all fields');
          return;
        }
      
        const priceString = price.toString();
        const decimalCount = (priceString.split('.')[1] || []).length;
      
        if (decimalCount !== 2) {
          alert('Please add a price with two decimal places');
          return;
        }
      
        // Assuming onAdd returns the newly added product with an ID
        const newProduct = await onAdd({ name, description, price, category });
        console.log('New Product:', newProduct);
      
        // Access the ID from the newly added product
        const newProductId = newProduct.id;
      
        // Reset form fields
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
      
        // Navigate to the product page using the new product ID
        navigate(`/product/${newProductId}`);
      };

    return (
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

            <input type="submit" value="Save product"/>
        </form>
    )
}

export default AddProduct