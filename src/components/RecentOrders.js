import axios from "axios";
import { useState, useEffect } from "react";

const RecentOrders = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const fetchData = async () => {
      let response = await axios.get(`${baseURL}/orders`);
      setRecentOrders(response.data);
    };

    fetchData();
  }, [recentOrders]);
  return (
    <div id="recent_orders_container">
      <h1> Recent Orders</h1>

      <div>
        <h4 id="heading_one">Number</h4>
        <h4 id="heading_two">Order</h4>
        <h4 id="heading_three">Date</h4>
        <h4 id="heading_four">Address</h4>
      </div>

      {recentOrders.map((item, index) => {
        return (
          <div key={index}>
            <p id="heading_one">{item._id.split('').splice(0,7)}</p>
            <p id="heading_two">{item.info?.name}</p>
            <p id="heading_three">Date</p>
            <p id="heading_four">{item.info?.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecentOrders;
