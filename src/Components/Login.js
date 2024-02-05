import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utills/Firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { BG_IMG } from "../utills/constant";
export default function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const email = useRef(null);
  const dispatch = useDispatch();
  const password = useRef(null);

  const name = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        }); //sign up login
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      //sign in login
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-4/12 rounded-sm p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="enter name "
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="email address "
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="enter password "
          className="p-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer font-bold" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Are you new to netflix? Sign up Now"
            : "Already Regsitered Sign IN Now"}
        </p>
      </form>
    </div>
  );
}
