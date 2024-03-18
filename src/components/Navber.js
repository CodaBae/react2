import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <nav>
      <div id="logo">
        <Link to="/">
          <img src={Logo} alt="logo"/>
        </Link>
      </div>
      <div id="mid_item">
        <Link to="/home">
          <p>COLLECTIONS</p>
        </Link>
        <Link to="/view-product">
          <p>CUSTOMIZER</p>
        </Link>
        <Link to="/orders">
          <p>SALE</p>
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <p>ITEMS</p>
        </Link>
      </div>
    </nav>
  );
};
export default Navber;
