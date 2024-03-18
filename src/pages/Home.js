import ProductCard from "../components/ProductCard";
import { useState } from "react";

import Foto1 from "../assets/Foto1.png";
import Foto2 from "../assets/Foto2.png";
import Foto3 from "../assets/Foto3.png";

const Home = () => {
  const [products, setProducts] = useState([
    { name: "Jacket KLS Beige", price: 100, image: Foto1, des:'Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.' },
    { name: "Jacket KLS Black", price: 200, image: Foto2,des:'Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.' },
    { name: "Jacket KLS Graphite", price: 300, image: Foto3,des:'Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.' },
  ]);

  return (
    <>
      <div id="heading">
        <h1>FABLE OF KLASSIK</h1>
        <h4>Jackets KLS</h4>
      </div>
      <div id="display_Product">
        {products.map((item, index) => (
          <ProductCard key={index} productItem={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
