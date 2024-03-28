import { useLocation, useNavigate } from "react-router-dom";

import { useData } from "../context/DataContext";

const ProductView = () => {
  const { setCartData, cartData} = useData();
  let { state } = useLocation();
  const navigate = useNavigate()
  console.log(state, "location");

  const addToCart = () => {
    setCartData([ ...[state.productItem,...cartData]])
    navigate('/orders')
    localStorage.setItem("cartData",JSON.stringify([ ...[state.productItem,...cartData]]))
  };

  return (
    <div id="product_view_container">
      <img src={state.productItem.image} alt="product" />
      <div>
        <h1>{state.productItem.name}</h1>
        <h1>{state.productItem.price}</h1>

        <button onClick={addToCart}>Add to cart</button>

        <p>Product Info</p>
        <p>{state.productItem.desc}</p>
      </div>
    </div>
  );
};

export default ProductView;
