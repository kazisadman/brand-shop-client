const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-[#FF7A00] font-semibold mb-5">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="max-h-[420px]"
              src="https://i.ibb.co/Jq6gzyV/blog1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mastering the Art of Car Maintenance: Pro Tips for Every Owner
            </h2>
            <p>
              Discover essential maintenance practices that will keep your car
              running smoothly and extend its lifespan. From routine checks to
              DIY fixes, this guide covers it all, empowering you to take charge
              of your vehicle&apos;s well-being.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#FF7A00] text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="max-h-[420px]"
              src="https://i.ibb.co/dfHQSbS/blog2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Unveiling the Future: Exploring the Latest Innovations in Electric
              Vehicles
            </h2>
            <p>
              {" "}
              Dive into the world of electric vehicles (EVs) and get a glimpse
              of the cutting-edge technologies shaping the automotive industry.
              Learn about the latest models, charging infrastructure, and the
              environmental impact of making the switch to electric
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#FF7A00] text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[220px]"
              src="https://i.ibb.co/8PRvxP0/blog3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              The Thrill of the Drive: A Journey through Iconic Roads and Scenic
              Routes
            </h2>
            <p>
              Embark on a virtual road trip as we highlight some of the
              world&apos;s most breathtaking drives. From winding coastal roads
              to mountain passes, this blog takes you on a visual tour, offering
              travel inspiration for both seasoned road trippers and adventurous
              beginners
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#FF7A00] text-white">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
