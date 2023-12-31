const Errorpage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl font-medium mb-4">Page not found</p>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </div>
  );
};

export default Errorpage;
