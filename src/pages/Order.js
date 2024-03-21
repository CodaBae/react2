import Form from "../components/Form";
import CartProduct from "../components/CartProduct";
import Breakdown from "../components/Breakdown";

const Order = () => {
  return (

      <>
      <div id="order_container">
        <div id="order_first">
          <Form />
        </div>

        <div id="order_second">
          <CartProduct />
          <CartProduct />
          <CartProduct />

          <div>
            <Breakdown />
          </div>

          
        </div>
      </div>

     
      
      </>

  );
};

export default Order;
