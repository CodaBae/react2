import { useLocation, useParams, Link } from "react-router-dom";


const ProductView = () => {
  let { state } = useLocation();
  console.log(state, "location");
  return (
    <div id="product_view_container">
      <img src={state.productItem.image} alt="product image" />
      <div>
        <h1>{state.productItem.name}</h1>
        <h1>{state.productItem.price}</h1>

        <Link to='/orders'>
        <button>Add to cart</button>

        </Link>
        

        <p>Product Info</p>
        <p>{state.productItem.des}</p>
      </div>
    </div>
  );
};

export default ProductView;
