import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Product = ({ deleteAndClose }) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    //you are also getting your product with a fetch... 
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
              <span className="modal-button" onClick={() => deleteAndClose(product.id)}>Delete</span>
            </footer>
        </>
    )
}
export default Product