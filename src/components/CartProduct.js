import { useData } from "../context/DataContext";


const CartProduct = ({item}) => {
  const { setCartData, cartData} = useData();

  const handleDelete = (id) => () => {
   let newCart =  cartData.filter((item)=>{
      return item._id !== id

    })
    setCartData(newCart)
    localStorage.setItem("cartData",JSON.stringify(newCart))
  }

  return (
    <div id="cart_area">
      <div className="cart_first">
        <img src={item.image} alt='product'/>
      </div>
      <div className="cart_second">
        <div>
          <h1 style={{marginTop:0}}>{item.name}</h1>
          <p>Collection: {item.name}</p>
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
          <p>Price: #{item.price}</p>
          <button onClick={handleDelete(item._id)}> Delete </button>
        </div>
      </div>
    </div>
  );
};


export default CartProduct