import image from "../assets/Rectangle 8.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-xl rounded-lg shadow-2xl" />
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-[#FF7A00]">About Us</h1>
            <p className="py-6">
              Welcome to Careos! With 20 years in the
              industry, we offer a curated selection of top-tier vehicles.
              We&apos;re more than a dealership - we&apos;re a community of
              enthusiasts. Our personalized service ensures a seamless
              experience. Explore our diverse inventory, each car chosen for
              quality and style. Transparency is our priority, providing
              detailed histories and specs. Join us in your automotive journey.
            </p>
            <button className="btn bg-[#FF7A00] text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
