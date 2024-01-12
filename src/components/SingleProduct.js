import { FaTimes, FaEye, FaPencilAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SingleProduct = ({ product, onDelete }) => {

    const priceDisplay = (price) => {
        const numericPrice = parseFloat(price);
      
        if (isNaN(numericPrice)) {
          // Handle the case where the price is not a valid number
          console.error('Invalid price:', price);
          return 'Invalid Price';
        }
      
        const formattedPrice = numericPrice.toFixed(2);
        return formattedPrice;
      };

    return(
        <div className='product'>
            <h3>{product.name}</h3>
            <p className="price">{priceDisplay(product.price)}</p>
            <div className="actions">
                <Link to={`/product/${product.id}`}><FaEye className="icon" /></Link>
                <FaTimes className="icon" onClick = {() => onDelete(product.id)}/>  
                <Link to={`/edit/${product.id}`}><FaPencilAlt className="icon"/></Link>
            </div>

        </div>
    )
}

export default SingleProduct
