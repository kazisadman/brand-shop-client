import PropTypes from "prop-types";
import { useContext } from "react";
import { Authcontextprovider } from "../Context/Authcontext";
import { Navigate } from "react-router-dom";

const Priveteroute = ({ children }) => {
  const { user } = useContext(Authcontextprovider);
  if (!user) {
   return <Navigate to={"/login"} replace></Navigate>;
  } 
  return (
    <div>
      {children}
    </div>
  );
};

Priveteroute.propTypes = {
  children: PropTypes.object,
};

export default Priveteroute;
