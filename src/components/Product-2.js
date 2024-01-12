import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import EditProduct from './EditProduct';

const Product = ({ setShowAddProduct, onDelete, onClose, deleteAndClose}) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    // Function to Delete the product and close the modal
/*     const deleteAndClose = (productId) => {
      onDelete(productId)
      onClose()
    }; */

    //you are also getting your product with a fetch... you will not do this 
    //when you are getting your data from the server... 
    useEffect(() => {
        setShowAddProduct(false)
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
      }, [setShowAddProduct, id]); 
    //const task = tasks.find(item => item.id === id)
    return(
        <>
            <div>
                <h3>
                  { product.name }
                </h3>
                <p className='price'>
                  { product.price }
                </p>
                <p className='description'>
                  { product.description }
                </p>
            </div>
            <footer>
              <Link className="modal-button" to={`/edit/${product.id}`}>Modify</Link>
              <span className="modal-button" onClick={() => deleteAndClose(product.id)}>
              Delete
              </span>
            </footer>
        </>
    )
}
export default Product