// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import PropTypes from "prop-types";

const Products = ({ carsData }) => {
  // const [cars, setCars] = useState([]);
  // const [carsData, setCarsData] = useState([]);
  // console.log(cars);

  const { brand } = useParams();
  const exist = carsData.filter((carData) => brand === carData.brand_name);
  console.log(exist);

  // useEffect(() => {
  //   fetch("http://localhost:5000/cars")
  //     .then((res) => res.json())
  //     .then((data) => setCarsData(data));
  // }, []);

  // useEffect(() => {
  //   console.log(carsData);

  //   // const displaycars = [];
  //   // const exist = carsData.find((carData) => brand === carData.brand_name);
  //   console.log(exist);
  //   // if (exist) {
  //   //   displaycars.push(exist);
  //   // }

  //   // setCars(displaycars);
  // }, [carsData, brand]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exist.length > 0 ? (
        exist.map((car) => <Product key={car._id} car={car}></Product>)
      ) : (
        <h2 className="text-5xl font-semibold">No Product available</h2>
      )}
    </div>
  );
};

Products.propTypes = {
  carsData: PropTypes.array,
};

export default Products;
