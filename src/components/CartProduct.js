import Foto1 from "../assets/Foto1.png";


const CartProduct = () => {
  return (
    <div id="cart_area">
      <div className="cart_first">
        <img src={Foto1} />
      </div>
      <div className="cart_second">
        <div>
          <h1 style={{marginTop:0}}>Jacket KLS</h1>
          <p>Collection: KLASSIK OF FABLE</p>
          <p>Article: H0522001</p>
        </div>

        <div className="flexB">
          <div>
            <p>Size: M</p>
          </div>
          <div>
            <p>Color: Black</p>
          </div>
          <div>
            <p>Quantity: 1</p>
          </div>
        </div>

        <div className="flexB">
          <p>Price: #105</p>
          <p> Delete</p>
        </div>
      </div>
    </div>
  );
};


export default CartProduct