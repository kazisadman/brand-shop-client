import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
export const Authcontextprovider = createContext(null);

const Authcontext = ({ children }) => {
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Authinfo = { userRegister, userLogin };
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
