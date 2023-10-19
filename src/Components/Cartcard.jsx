import PropTypes from "prop-types";
import { BiCar, BiStar } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";

const Cartcard = ({ addedcar }) => {
  const {
    _id,
    car_name,
    car_image,
    body_type,
    price,
    short_description,
    rating,
  } = addedcar;

  const handleCartDelet = () => {
    console.log(_id);
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={car_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{car_name}</h2>
          <p>{short_description}</p>
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
          <div className="card-actions justify-end">
            <button onClick={handleCartDelet} className="btn btn-primary">
              delete
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

Cartcard.propTypes = {
  addedcar: PropTypes.object,
};

export default Cartcard;
