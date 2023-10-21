import { useLoaderData } from "react-router-dom";
import Cartcard from "../Components/Cartcard";

const Cart = () => {
  const addedCars = useLoaderData();
  console.log(addedCars);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addedCars.length > 0?addedCars.map((addedcar) => (
          <Cartcard key={addedcar._id} addedcar={addedcar}></Cartcard>
        )):<h2>bangladesh</h2>}
      </div>
    </div>
  );
};

export default Cart;
