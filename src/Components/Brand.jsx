import PropTypes from "prop-types";

const Brand = ({ brand }) => {
  console.log(brand);
  const { brand_name, brand_image } = brand;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-16 h-16" src={brand_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
        </div>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
