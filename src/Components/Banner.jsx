import image from "../assets/car-604019_1280.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-left text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-7xl font-bold">
              Purchase your <span className="text-[#FF7A00]">Perfect</span> car
            </h1>
            <h3 className="mb-5 text-4xl font-semibold">
              Over 1000+ New Cars Available Here
            </h3>
            <p className="mb-5">
              Embark on a Journey of Automotive Excellence! Discover a
              Handpicked Collection of High-Performance, Luxurious, and Stylish
              Cars. Your Perfect Vehicle Awaits - Explore Now and Elevate Your
              Driving Experience!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Banner;
