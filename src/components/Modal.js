import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import EditProduct from './EditProduct';
import Product from './Product';
import AddProduct from './AddProduct';
import { FaTimes, FaEye, FaPencilAlt } from 'react-icons/fa'

const Modal = ({onUpdate, onCancel, products, setShowAddProduct, onAdd}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const getDynamicContent = () => {
        switch (true) {
            case location.pathname.startsWith('/product/'):
                return  <>
                            <Product setShowAddProduct={setShowAddProduct}/>
                        </> ;
            case location.pathname === '/create':
                return  <>
                            <AddProduct onAdd={onAdd} onCancel={onCancel} />
                        </> ;
            case location.pathname.startsWith('/edit/'):
                return  <>
                            <EditProduct products={products} onUpdate={onUpdate} onCancel={onCancel} />
                        </> ;
            default:
                return 'nothing';
        }
    };

    let content = getDynamicContent();

    return(
        <div>

            {content}

        </div>

    )
}
export default Modal