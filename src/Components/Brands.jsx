import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="mb-4">
      <h1 className="text-5xl text-[#FF7A00] font-semibold mb-5">Brands</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Brand key={brand.brand_name} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
