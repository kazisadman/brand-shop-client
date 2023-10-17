import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
const Router = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Router;
