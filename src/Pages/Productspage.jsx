import { useLoaderData } from "react-router-dom";
import Productbanner from "../Components/Productbanner";
import Products from "../Components/Products";

const Productspage = () => {
  const carsData = useLoaderData()
  return (
    <div>
      <Productbanner></Productbanner>
      <Products  carsData={carsData}></Products>
    </div>
  );
};

export default Productspage;
