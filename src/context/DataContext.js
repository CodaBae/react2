import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
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
