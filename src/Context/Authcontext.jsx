import PropTypes from "prop-types";
import { createContext } from "react";
export const Authcontextprovider = createContext(null);

const Authcontext = ({ children }) => {
  const Authinfo = {};
  return (
    <Authcontextprovider.Provider value={Authinfo}>
      {children}
    </Authcontextprovider.Provider>
  );
};

Authcontext.propTypes = {
  children: PropTypes.object,
};

export default Authcontext;
