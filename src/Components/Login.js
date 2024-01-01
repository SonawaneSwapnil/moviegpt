import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form className=" w-4/12 rounded-3xl p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="name"
            placeholder="enter name "
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="email address "
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="enter password "
          className="p-4 my-2 w-full bg-gray-700"
        />

        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
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
