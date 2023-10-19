import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
export const Authcontextprovider = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Authcontext = ({ children }) => {
  const [user, setUser] = useState(null);
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const userLogout = () => {
    return signOut(auth);
  };

  const Authinfo = { userRegister, userLogin, userGoogle, userLogout, user };
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
