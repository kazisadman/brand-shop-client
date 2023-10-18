import { useLoaderData } from "react-router-dom";
import Cartcard from "../Components/Cartcard";

const Cart = () => {
  const addedCars = useLoaderData();
  return (
    <div>
      <h1>this is cart page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addedCars.map((addedcar) => (
          <Cartcard key={addedcar.brand_name} addedcar={addedcar}></Cartcard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
