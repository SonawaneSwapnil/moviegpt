import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utills/Firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utills/userSlice";
import { LOGO, USERAVTAR } from "../utills/constant";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black rounded-sm z-10 w-full flex flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="flex h-9">
        <img src={USERAVTAR} alt="" />
        <button
          type=""
          className=" font-bold text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
