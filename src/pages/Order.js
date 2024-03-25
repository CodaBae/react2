import Form from "../components/Form";
import CartProduct from "../components/CartProduct";
import Breakdown from "../components/Breakdown";
import { useData } from "../context/DataContext";

const Order = () => {

  const {cartData} = useData()

  return (
    <>
      <div id="order_container">
        <div id="order_first">
          <Form />
        </div>

        <div id="order_second">
          {cartData.map((item, index) => (
            <CartProduct item={item} key={index} />
          ))}

          {cartData.length > 0 ? (
            <div>
              <Breakdown />
            </div>
          ): 'no data'}
        </div>
      </div>
    </>
  );
};

export default Order;
