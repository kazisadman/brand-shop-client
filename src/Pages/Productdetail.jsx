import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BiCar, BiStar } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";

const Productdetail = () => {
  const [car, setCar] = useState("");
  const { name } = useParams();
  const cars = useLoaderData();

  useEffect(() => {
    const exist = cars.find((car) => name === car.car_name);

    if (exist) {
      setCar(exist);
    }
  }, [cars, name]);

  const handleCart = () => {
    const cartToast = document.getElementById("cart");
    cartToast.classList.remove("hidden");
    setTimeout(() => {
      cartToast.classList.add("hidden");
    }, 3000);
  };

  const { car_name, car_image, body_type, price, short_description, rating } =
    car;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={car_image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{car_name}</h1>
            <p className="py-6">{short_description}</p>
            <div className="flex justify-between items-center">
              <div>
                <BiCar className="text-3xl"></BiCar>
                <h2 className="text-2xl">{body_type}</h2>
              </div>
              <div className="flex flex-col items-center">
                <BiStar className="text-3xl"></BiStar>
                <h2 className="text-2xl">{rating}</h2>
              </div>
              <div>
                <ImPriceTag className="text-2xl"></ImPriceTag>
                <h2 className="text-2xl">{price}</h2>
              </div>
            </div>
            <button onClick={handleCart} className="btn btn-primary mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div id="cart" className="toast hidden">
        <div className="alert alert-info">
          <span>Proudct is added to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
