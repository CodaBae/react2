import { createContext, useContext, useState, useEffect } from "react";

import Foto1 from "../assets/Foto1.png";
import Foto2 from "../assets/Foto2.png";
import Foto3 from "../assets/Foto3.png";

import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const baseURL = "https://react2node.onrender.com";
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("cartData");
    setCartData(JSON.parse(data));

    const fetchData = async () => {
      let response = await axios.get(`${baseURL}/products`);
      setProducts(response.data);
    };

    fetchData();
  }, [products]);

  return (
    <DataContext.Provider
      value={{ products, setProducts, cartData, setCartData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
