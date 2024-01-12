import SingleProduct from './SingleProduct'
import EditProduct from './EditProduct'


const ManyProducts = ({products, onDelete}) => {
    
    return (
        <div className="products-container">
            <div className="products">
                {products.length > 0 ? (
                    products.map((product)=>(
                        <SingleProduct key={product.id} product={product} onDelete={onDelete}/>
                    ))
                ):(
                    <div>Empty List</div>
                )}
            </div>
        </div>
    )
}
export default ManyProducts
