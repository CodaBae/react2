import ProductCard from "../components/ProductCard";
import { useData } from "../context/DataContext";

const Home = () => {

    const {products} = useData()

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
