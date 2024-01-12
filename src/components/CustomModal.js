import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import EditProduct from './EditProduct';
import Product from './Product';
import AddProduct from './AddProduct';
import { FaTimes } from 'react-icons/fa';

// Set the root node for the modal (for accessibility)
Modal.setAppElement('#root');

const CustomModal = ({ onDelete, onUpdate, products, onAdd }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(true);

    // Function to close the modal and navigate to '/'
    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    // Function to Delete the product and close the modal
    const deleteAndClose = (productId) => {
        onDelete(productId);
        closeModal();
    };

    // Function to determine the content of the modal based on the current path
    const getDynamicContent = () => {
        switch (true) {
            case location.pathname.startsWith('/product/'):
                return <Product products={products} deleteAndClose={deleteAndClose} />;
            case location.pathname === '/create':
                return <AddProduct onAdd={onAdd} />;
            case location.pathname.startsWith('/edit/'):
                return (
                <>
                    <EditProduct products={products} onUpdate={onUpdate} />
                </>
            );
            default:
                return 'nothing';
        }
    };

    // Content to be displayed in the modal
    let content = getDynamicContent();

    // Ensure modal is open when the location changes
    useEffect(() => {
        setIsModalOpen(true);
    }, [location.pathname]);

    return (

        <Modal 
            isOpen={isModalOpen} 
            onRequestClose={closeModal} 
            onAfterClose={() => setIsModalOpen(false)} 
            className="modal" 
            contentLabel="Custom Modal">
            <button className="close-modal" type="button" onClick={closeModal}>
                <FaTimes /> 
            </button>
            <div>{content}</div>
        </Modal>

    );
};

export default CustomModal;
