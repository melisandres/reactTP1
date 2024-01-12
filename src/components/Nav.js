import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/create" className="nav-link">Add Product</Link>
        </nav>
    )
}
export default Nav