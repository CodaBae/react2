import Input from "./Input";

const Breakdown = () => {
  return (
    <div id="breakdown_container">
      <div id="breakdown_sub">
        <div className="flexB">
          <p> Summary:</p>
          <p> #340</p>
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
        <h1> #340</h1>
      </div>
      </div>
     
      <div id="breakdown_sub">
        <div className="flexB ">
          <Input name={"PromoCode"} showLabel={false} fromPromo={true}/>

          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
