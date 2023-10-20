import { useLoaderData, useNavigate } from "react-router-dom";

const Updateproduct = () => {
  const carsData = useLoaderData();
  const nav = useNavigate();
  const {
    _id,
    brand_name,
    car_name,
    car_image,
    body_type,
    price,
    short_description,
    rating,
  } = carsData;

  const handleCarUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand_name = form.brand.value;
    const car_name = form.product.value;
    const car_image = form.photo.value;
    const body_type = form.body.value;
    const price = form.price.value;
    const short_description = form.discription.value;
    const rating = form.rating.value;
    const updatedCar = {
      brand_name,
      car_name,
      car_image,
      body_type,
      price,
      short_description,
      rating,
    };

    fetch(`http://localhost:5000/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nav("/home");
      });

    console.log(updatedCar);
    e.target.reset();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update a car</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCarUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  defaultValue={brand_name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="product"
                  placeholder="Product Name"
                  className="input input-bordered"
                  defaultValue={car_name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  defaultValue={car_image}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body Type</span>
                </label>
                <input
                  type="text"
                  name="body"
                  placeholder="Body Type"
                  className="input input-bordered"
                  defaultValue={body_type}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  defaultValue={price}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short discription</span>
                </label>
                <input
                  type="text"
                  name="discription"
                  placeholder="Short discription"
                  className="input input-bordered"
                  defaultValue={short_description}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  defaultValue={rating}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateproduct;
