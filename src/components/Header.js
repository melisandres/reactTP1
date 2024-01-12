import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'

const Header = ({ title }) => {
    const location = useLocation()

    // Function to get the dynamic title based on the route
    const getDynamicTitle = () => {
        switch (true) {
            case location.pathname === '/':
                return title;
            case location.pathname.startsWith('/about'):
                return 'About';
            case location.pathname.startsWith('/product/'):
                return 'Product Details';
            case location.pathname.startsWith('/edit/'):
                return 'Modify Product Details';
            default:
                return title;
        }
    };

    return (
        <header className="header">
            <h1>{getDynamicTitle()}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'Our products'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;