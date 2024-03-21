import Input from "./Input";

const Breakdown = () => {
  return (
    <div>
      <div>
        <div>
          <p> Summary:</p>
          <p> #340</p>
        </div>

        <div>
          <p> Delivery:</p>
          <p> #0</p>
        </div>

        <div>
          <p> PromoCode:</p>
          <p> #0</p>
        </div>
      </div>
      <div>
        <h1> Total:</h1>
        <h1> #340</h1>
      </div>
      <div>
        <Input name={"PromoCode"} />

        <button>Apply</button>
      </div>
    </div>
  );
};


export default Breakdown