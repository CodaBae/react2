import { createContext, useContext, useState } from "react";

import Foto1 from "../assets/Foto1.png";
import Foto2 from "../assets/Foto2.png";
import Foto3 from "../assets/Foto3.png";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([
    {
      name: "Jacket KLS Beige",
      price: 100,
      image: Foto1,
      des: "Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.",
    },
    {
      name: "Jacket KLS Black",
      price: 200,
      image: Foto2,
      des: "Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.",
    },
    {
      name: "Jacket KLS Graphite",
      price: 300,
      image: Foto3,
      des: "Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.",
    },
  ]);
  return (
    <DataContext.Provider
      value={{ products, setProducts, cartData, setCartData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
