import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import EditProduct from './EditProduct';
import Product from './Product';
import AddProduct from './AddProduct';

const Modal = ({onUpdate, products, onAdd}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const getDynamicContent = () => {
        switch (true) {
            case location.pathname.startsWith('/product/'):
                return  <>
                            <Product />
                        </> ;
            case location.pathname === '/create':
                return  <>
                            <AddProduct onAdd={onAdd} />
                        </> ;
            case location.pathname.startsWith('/edit/'):
                return  <>
                            <EditProduct products={products} onUpdate={onUpdate} />
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