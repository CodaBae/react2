import { Link } from "react-router-dom"
const ProductCard = ({productItem}) => {

    return(
        <div id='product_card'>
           <Link to={`/view-product/${productItem.name}`}>

           {/* <Link  to="/view-product"  state={{productItem}}> */}
           
           <img src={productItem.image} alt='Foto' id='product_image' />
            <div id='product_info'>
            <h5>{productItem.name}</h5>
            <h3>€ {productItem.price}</h3>
            </div>
           </Link>
        </div>
    )
}

export default ProductCard