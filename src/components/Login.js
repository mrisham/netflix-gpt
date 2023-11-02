import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="body-bg-img"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name..."
            className="py-4 px-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="E-mail Address"
          className="py-4 my-4 px-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="py-4 my-4 px-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-700 my-6 p-4 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 px-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered ! Please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
