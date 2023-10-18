import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [cars, setCars] = useState([]);
  const [carsData, setCarsData] = useState([]);

  const { brand } = useParams();

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCarsData(data));

    const displaycars = [];
    const exist = carsData.find((carData) => brand === carData.brand_name);
    if (exist) {
      displaycars.push(exist);
    }

    setCars(displaycars);
  }, [brand, carsData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <Product key={car.brand_image} car={car}></Product>
      ))}
    </div>
  );
};

export default Products;
