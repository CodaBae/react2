import Input from "./Input";
import { useData } from "../context/DataContext";
import { useEffect, useState } from "react";

const Breakdown = () => {
  const { cartData } = useData();
  const [sum, setSum] = useState(0);


  useEffect(() => {
   let sum = cartData.reduce((total, current) => {
      return total + current.price
     },0);

     setSum(sum)
  }, [sum]);

  return (
    <div id="breakdown_container">
      <div id="breakdown_sub">
        <div className="flexB">
          <p> Summary:</p>
          <p> #{sum}</p>
        </div>

        <div className="flexB">
          <p> Delivery:</p>
          <p> #0</p>
        </div>

        <div className="flexB">
          <p> PromoCode:</p>
          <p> #0</p>
        </div>

        <div className="flexB">
          <h1> Total:</h1>
          <h1> #{sum}</h1>
        </div>
      </div>

      <div id="breakdown_sub">
        <div className="flexB ">
          <Input name={"PromoCode"} showLabel={false} fromPromo={true} />

          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
