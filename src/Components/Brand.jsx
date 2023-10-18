import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  console.log(brand);
  const { brand_name, brand_image } = brand;
  return (
    <div>
      <Link to={`/${brand_name}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-16 h-16" src={brand_image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{brand_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
