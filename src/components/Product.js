import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Product = ({products, setShowAddProduct, onDelete, onClose, deleteAndClose}) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        //setShowAddProduct(false);
        // Find the product in the local state based on the id
        const selectedProduct = products.find((p) => p.id === parseInt(id));
        console.log(selectedProduct);
        setProduct(selectedProduct || {});
    }, [setShowAddProduct, id, products]);

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